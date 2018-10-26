import { OnInit, Component , Injectable } from '@angular/core';
import * as ons from 'onsenui';

import { Menu } from '../modules/children/menu/menu';
import { IndexedDbService } from '../services/IndexedDbService';

//import { TrnPhotoInfo } from '../../initData/TrnPhoto.json';
//import data from 'json!./data.json';
@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
  	'./app.css'
  ]
})

export class MyApp {
  constructor(private indexedDbService: IndexedDbService) {}

  async ngOnInit() {
    var flg = await this.CheckInitData();

    console.log(flg);

    if(flg) {
      console.log('データ初期化するよ');
      this.indexedDbService.addMultipleLocationInfo([
        {
            "LocationID": "1",
            "Address": "北海道 室蘭市 常盤町１丁目",
            "Latitude": 42.31841,
            "Longitude": 140.9701178
        },
        {
            "LocationID": "2",
            "Address": "北海道 室蘭市 祝津町３丁目",
            "Latitude": 42.339825,
            "Longitude": 140.943745
        },
        {
            "LocationID": "3",
            "Address": "北海道 室蘭市 茶津町",
            "Latitude": 42.319695,
            "Longitude": 140.986877
        },
        {
            "LocationID": "4",
            "Address": "北海道 室蘭市 道道699号線",
            "Latitude": 42.31891,
            "Longitude": 140.97256
        }
      ]);
  
      console.log(TrnPhotoInfo);
      //this.indexedDbService.addMultiplePhotoInfo(TrnPhotoInfo);

      this.indexedDbService.cheakedInitData();
    }
  }

  async CheckInitData() {
    var ret = await this.indexedDbService.cheakInitData();

    return ret;
  } 

  initialPage = Menu;
}
