import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {TimeTrip} from '../timeTrip/timeTrip';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 
import {IndexedDbService} from '../../../services/IndexedDbService';

@Component({
  selector: "ons-page[title='registrationList']",
  template: require('./registrationList.html'),
  styles: [
  	`
    .registration_title{
      font-size:20px;
      font-weight:bold;
    }
    .registration_comment{
      font-size:14px;
      
    }
    `
  ]
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
            PhotoId:registList.PhotoId,
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
  clickPhoto(LocatonID:string,Year:string){
    this._navigator.nativeElement.pushPage(TimeTrip, {data: {"year": Year , "LocationID":LocatonID}});    
    console.log('クリックしたLocationID' + LocatonID);
    console.log('クリックしたyear' + Year);
  }
}

class RegistrationInfo {
  PhotoId: string;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}
