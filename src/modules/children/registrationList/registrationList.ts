import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {TimeTrip} from '../timeTrip/timeTrip';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 
import {IndexedDbService} from '../../../services/IndexedDbService';

@Component({
  selector: "ons-page[title='registrationList']",
  template: require('./registrationList.html'),
  styles: [`
    .registration_title{
      font-size:20px;
      font-weight:bold;
    }
    .registration_comment{
      font-size:14px; 
    }
    .dataPicArea {
      width:100%;
    }
    .dataPicArea img {
      text-align:center;
    }
    .dataMemoArea {
      width:30%;
    }
    .dataMemoArea-title {
      margin-left:5px;
      margin-right:20px;
      //font-size:16px;
      font-weight:700;
    }
    .dataMemoArea-text {
      margin-left:5px;
      margin-right:20px;
      //font-size:10px;
    }`]
})
export class RegistrationList {
  RegistrationLists: RegistrationInfo[] = [];
  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService) {
  }

  async ngOnInit() {
    this.getRegistList();
  }
  
  async getRegistList(){
    var data = await this._indexedDbService.getTrnPhotoInfo();
    if(data == null)
    {
      console.log('データを取得できなかった');
      data = [];
    }else{
      data.forEach(registList => {
        this.RegistrationLists.push(
          {
            PhotoID:registList.PhotoID,
            Year:registList.Year,
            LocationID:registList.LocationID,
            Title:registList.Title,
            Comment: registList.Comment,
            Bin: registList.Bin,
            LastUpdateDate: registList.LastUpdateDate
          }
        )
      });
    }
  }

  // 写真をタップした時のイベント
  clickPhoto(_locatonID:string, _photoId:number){
    this._navigator.nativeElement.pushPage(TimeTrip, {data: {PhotoID: _photoId , LocationID:_locatonID}});
    console.log('クリックしたLocationID' + _locatonID);
    console.log('クリックしたPhotoId' + _photoId);
  }
}

class RegistrationInfo {
  PhotoID: number;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}
