import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Menu } from '../menu/menu';

import * as ons from 'onsenui';
import {
  OnsSelect,
  OnsenModule,
  CUSTOM_ELEMENTS_SCHEMA,
  OnsNavigator,
  Params
} from 'ngx-onsenui';

import { IndexedDbService } from '../../../services/IndexedDbService';
import { Upload } from '../upload/upload';

@Component({
  selector: "ons-page[title='timeTrip']",
  template: require('./timeTrip.html'),
  // styleUrls: ['../src/modules/children/timeTrip/timeTrip.css'],
  styles: [`
  .left {
    float: left;
    margin-right: 3px;
  }
   
  .item {
    margin-bottom: 30px;
  }
  
  .title {
    font-size: 24px;
    
  }
  
  .material-icons {
    font-size:35px;
  }
  
  .btn {
    color: black;
    background-color: transparent;
    box-shadow: none;
    height: 35px;
    width: 35px;
    padding: 0px;
    margin-right: 10px;
  }
  
  .addressSelect{
    width: calc(100% - 35px - 10px);
  }
  
  .carousel_text {
    position: absolute; 
    bottom: 0; 
    right: 30px; 
    margin-bottom: 10px;
    font-size: 30px;
    color: darkgray;
  }
  
  .carousel_photo {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  
  .carousel_erricon {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 35px;
    height: 35px;
  }
  
  .photoModal {
    height: 300px;
    width: 300px;
    margin: auto;
  }
  
  .modal_text {
    position: relative;
    top: 250px;
    left: 90px;
    font-size: 30px;
    color: dimgray;
  }
  
  #carousel {
    height: 200px; 
    width: 80%;
    margin: 0 auto;
  }`]
})
export class TimeTrip {
  @ViewChild('carousel') carousel;
  @ViewChild('modal') modal;
 
  photoInfo: TimeTripPhotoInfo = new TimeTripPhotoInfo();

  isImgErrList: boolean[] = [];
  locationInfoList: LocationInfo[] = [];
  photoInfoAllList: TimeTripPhotoInfo[] = [];
  photoInfoList: TimeTripPhotoInfo[] = [];
  location: LocationInfo = new LocationInfo();
  
  onShow = this.init();

  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {}

  async init() {
    // 引数を取得
    var locationId = this._params.data.LocationID;
    var photoId = this._params.data.PhotoID;

    // 位置情報リスト取得
    this.locationInfoList = await this._indexedDbService.getMstLocationInfo();
    if(this.locationInfoList){
      this.location = this.locationInfoList.find(f => f.LocationID == locationId);
    }

    // 写真情報取得
    await this.setPhotoInfo(locationId, photoId);

    // 読み込めなかった写真リスト初期化
    var array = new Array(this.photoInfoList.length);
    this.isImgErrList = this.isImgErrList.fill(false, 0, array.length);

    // カルーセルの初期設定
    this.initCrousel();

    // console.log(this._params);
    // console.log(this.locationInfoList);
    // console.log(this.location);
    // console.log(this.photoInfoAllList);
    // console.log(this.photoInfoList);
    // console.log(this.photoInfo);
  }

  // カルーセル切り替え時
  toPostChange(event) {
    this.photoInfo = this.photoInfoList[event.activeIndex];
  }
  
  // メニューに遷移
  goToMenu() {
    this._navigator.nativeElement.resetToPage(Menu);
  }

  // uploadに遷移
  goToUpload() {
    this._navigator.nativeElement.pushPage(Upload, {data: { LocationID: this.location.LocationID, Address: this.location.Address }});
  }

  // 画像拡大モーダルを開く
  openModal(index: number) {
    if (!this.isImgErrList[index]) {
      this.modal.nativeElement.show();
    }
  }  

  // カルーセルの初期設定
  private initCrousel(){
    // カルーセルの初期位置設定
    var index = this.photoInfoList.findIndex(s => s.PhotoID == this.photoInfo.PhotoID);
    var activeIndex = index == -1 ? 0 : index;
    this.carousel.nativeElement.setAttribute("initial-index", activeIndex.toString());
  }

  // 写真情報設定
  private async setPhotoInfo(locationID: string, photoID: number){
    // 時系列写真情報リスト取得
    this.photoInfoAllList = await this._indexedDbService.getTrnPhotoInfo();

    // timeTrip情報を設定
    if(this.photoInfoAllList){
      this.photoInfoList = this.photoInfoAllList
        .sort((a, b) => {             // 年の昇順
          if( a.Year < b.Year ) return -1;
          if( a.Year > b.Year ) return 1;
          return 0;
        })
        .filter(f => f.LocationID == locationID);
    }

    // activeな写真情報
    if(this.photoInfoList && this.photoInfoList.length > 0){
      var tempPhotoInfo = this.photoInfoList.find(f => f.PhotoID == photoID);
      this.photoInfo = tempPhotoInfo ? tempPhotoInfo : this.photoInfoList[0];
    }
  }
}
 
class LocationInfo {
  LocationID: string;
  Address: string;
  Latitude: number;
  Longitude: number;
}

class TimeTripPhotoInfo {
  PhotoID: number;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}