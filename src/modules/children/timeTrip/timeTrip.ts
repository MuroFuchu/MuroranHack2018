import { Component, ViewChild, HostListener } from '@angular/core';
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
 
  // テストデータ
  addressListDB: LocationInfo[] = [
    { LocationID: "a001", Address: "北海道登別市幌別町３－２０", Latitude: 10, Longitude: 10 },
    { LocationID: "a002", Address: "東京都府中市府中町１－９", Latitude: 20, Longitude: 10 },  
    { LocationID: "a003", Address: "岩手県宮古市五月町１－１", Latitude: 50, Longitude: 10 },
  ];
  // テストデータ
  infoListDB: TimeTripPhotoInfo[] = [
    { PhotoId: "p001", Year: 1984, LocationID: "a001", Title: "幌別駅前通り 1984.", Comment: "北口駅前の様子。情調ある風景が感慨を感じさせる。", Bin: "aaa", LastUpdateDate: "20181025" },
    { PhotoId: "p002", Year: 2018, LocationID: "a001", Title: "幌別駅前通り 2018.", Comment: "北口駅前の様子。無機質な町並が現実を実感させる。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p003", Year: 2050, LocationID: "a001", Title: "幌別駅前通り 2050.", Comment: "北口駅前の様子。人間もペットも電子になりました。", Bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p004", Year: 2014, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が府中市Jタワーより移転した年。", Bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p005", Year: 2018, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p006", Year: 2062, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "本社JSWが事実上日本を支配した年。", Bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p007", Year: 1978, LocationID: "a003", Title: "宮古市魚菜市場　開業", Comment: "宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。", Bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p008", Year: 2019, LocationID: "a003", Title: "宮古市魚菜市場　開業30周年", Comment: "宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p009", Year: 2088, LocationID: "a003", Title: "宮古市魚菜市場　開業100周年", Comment: "宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。", Bin: "k8aa", LastUpdateDate: "20181025" },
  ];
 
  // 引数
  address: string = "";
  locationId: string = "";
  photoId: string = "";

  targetYear: number = 0;
  activeIndex: number = 0;
  isImgErrList: boolean[] = [];

  locationInfoList: LocationInfo[] = [];
  location: LocationInfo = new LocationInfo();
  photoInfoAllList: TimeTripPhotoInfo[] = [];
  photoInfoList: TimeTripPhotoInfo[] = [];
<<<<<<< HEAD
  photoInfo: TimeTripPhotoInfo = new TimeTripPhotoInfo();

  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {
    console.log(_navigator.nativeElement.topPage);
    console.log(_navigator.nativeElement.topPage.show);
    _navigator.nativeElement.topPage.show = this.ngOnInit;
  }
 
  async ngOnInit() {
    alert('初期化');
=======
  location: LocationInfo = new LocationInfo();
  

  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {}

  @HostListener('show')
  timeTripShow(e){
  this.init();
  }

  async init() {
>>>>>>> 39b39cc8b564959e377c024e81bf74e4a4575cc1
    // 引数を取得
    this.locationId = this._params.data.LocationID;
    this.address = this._params.data.Address;
    this.photoId = this._params.data.PhotoID;

    // 位置情報リスト取得
    this.locationInfoList = await this._indexedDbService.getMstLocationInfo();
    if(this.locationInfoList){
      this.location = this.locationInfoList.find(f => f.LocationID == this.locationId);
    }

    // 時系列写真情報リスト取得
    this.photoInfoAllList = await this._indexedDbService.getTrnPhotoInfo();
    // console.log(this.photoInfoList);
    // if(this.photoInfoList){
    //   this.photoInfoList = this.photoInfoList.filter(f => f.LocationID == this.locationId);
    //   this.photoInfo = this.photoInfoList.find(f => f.PhotoId == this.photoId);
    // }

    // timeTrip情報を設定
    this.setInfoList(this.location);

    // carouselの初期位置設定
    var index = this.photoInfoList.findIndex(s => s.PhotoId == this.photoInfo.PhotoId);
    this.activeIndex = index ? index : 0;
    this.carousel.nativeElement.setAttribute("initial-index", this.activeIndex.toString());

    // テストで画像を取得してみる
    // var res = await this._indexedDbService.getTrnPhotoInfoByKey("1");
    // this.infoListDB[0].Bin = res.Bin;
    // this.infoListDB[1].Bin = res.Bin;
    // this.infoListDB[2].Bin = res.Bin;
  }

  toPostChange(event) {
    this.photoInfo = this.photoInfoList[event.activeIndex];
  }

  changeAddress(event) {
    this.location = this.addressListDB.find(f => f.LocationID == event.target.value);
    this.setInfoList(this.location);
    this.reloadCarousel();
  }

  setInfoList(info: LocationInfo) {
    // this.photoInfoList = this.infoListDB.filter(f => f.LocationID == info.LocationID);
    if(this.photoInfoAllList){
      this.photoInfoList = this.photoInfoAllList.filter(f => f.LocationID == info.LocationID);
    }

    if(this.photoInfoList && this.photoInfoList.length > 0){
      var tempPhotoInfo = this.photoInfoList.find(f => f.PhotoId == this.photoId);
      this.photoInfo = tempPhotoInfo ? tempPhotoInfo : this.photoInfoList[0];
    }

    var array = new Array(this.photoInfoList.length);
    this.isImgErrList = this.isImgErrList.fill(false, 0, array.length);
    
    // this.photoInfo = this.photoInfoList.find(f => f.Year == this.targetYear);
    // if (!this.photoInfo) {
    //   this.photoInfo = this.photoInfoList[0];
    // }
  }

  openModal(index: number) {
    if (!this.isImgErrList[index]) {
      this.modal.nativeElement.show();
    }
  }
  
  goToMenu() {
  　this._navigator.nativeElement.pushPage(Menu);
  }

  goToUpload() {
    this._navigator.nativeElement.pushPage(Upload, {data: { LocationID: this.locationId, Address: this.address }});
  }

  convertImageSource(bin: string) {
    return `data:image/jpg;base64,${bin}`;
  }

  private reloadCarousel() {
    var index = this.photoInfoList.findIndex(s => s.PhotoId == this.photoInfo.PhotoId);
    this.carousel.nativeElement.refresh();
    this.carousel.nativeElement.setActiveIndex(index);
  }

}
 
class LocationInfo {
  LocationID: string;
  Address: string;
  Latitude: number;
  Longitude: number;
}

class TimeTripPhotoInfo {
  PhotoId: string;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}