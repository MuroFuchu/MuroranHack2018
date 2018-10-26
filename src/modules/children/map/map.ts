import {Component, NgZone, Injectable} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' ;
import {MapsAPILoader,GoogleMapsAPIWrapper } from '@agm/core';
import { TimeTrip } from '../timeTrip/timeTrip';
import {Upload} from '../upload/upload';

import {  } from '../../../services/IndexedDbService';
// import {DexieService} from 'ngx-dexie';//ﾃﾞｭｸｼ

@Component({
  selector: 'map',
  template: require('./map.html'),
  // styleUrls: ['../src/modules/children/map/map.css']
/* App CSS */
  styles: [`
.map_area {
    height:90%;
  }
  .btn_area {
    height:10%;
  }
  .btn_area li {
    display:inline-block;
  }
  agm-map {
    height: 90%;
  }`
  ]
})


export class Map {
  presentLat: number = 42.319695;
  presentLng: number = 140.986877;
  centerLat:number;
  centerLng:number;
  markers: marker[] = [];
  zone: NgZone;
  apiLoader: MapsAPILoader;
  apiWrapper:GoogleMapsAPIWrapper;
  map;
  iconPath: string = require('../../../../contents/buttons/goToTrip.png');

  constructor(private _navigator: OnsNavigator) {
    //座標
    this.getGeo();//現在地を取得
    this.centerLat = this.presentLat;
    this.centerLng = this.presentLng;
    this.displayPin();
    this.getMapData();
  }

  getGeo() {
    var option = {
      timeout: 6000   //タイムアウト値(ミリ秒)
    };
    var comp = this;
    navigator.geolocation.getCurrentPosition(
      function(position){
        comp.presentLat = position.coords.latitude;
        comp.presentLng = position.coords.longitude;
        comp.presentLat = 42.319695;//JSW仕様
        comp.presentLng = 140.986877;//JSW仕様

        console.log(`${comp.presentLat} / ${comp.presentLng}`)
      },
      function(){
        alert("error");
      },
      option
    );
  }

  displayPin(){
    this.apiWrapper = new GoogleMapsAPIWrapper(this.apiLoader,this.zone);
    this.apiWrapper.getCenter()
    .then(function(value){
      console.log(value);
    })
    .catch(function(value){
      console.log(value);
    });
    //var marker = this.apiWrapper.createMarker().then(m => m.);
    this.getGeo();
    this.markers = [
      {LocationID:1, Address:'あ', Latitude:42.339825, Longitude:140.943745,Url:'../contents/icons/pin_normal.svg'/*,areaName:'室蘭水族館'*/},
      {LocationID:2, Address:'い', Latitude:42.319695, Longitude:140.986877,Url:'../contents/icons/pin_normal.svg'/*,areaName:'日本製鋼所'*/},
      {LocationID:3, Address:'う', Latitude:42.318910, Longitude:140.972560,Url:'../contents/icons/pin_normal.svg'/*,areaName:'日鋼倉庫'*/},
      {LocationID:4, Address:'え', Latitude:42.318417, Longitude:140.970667,Url:'../contents/icons/pin_normal.svg'/*,areaName:'室蘭中央通り'*/},
      // {lat:, lng:,url:'../images/icon/pin_free.svg',areaName:'日鋼倉庫',tel:'09012341234',waitingNo:1,reservationNo:10 },
    ];
    
  }
  // マーカーをクリックした時に表示をセンターにする
  changeCenter(m:marker){
    this.centerLat = m.Latitude;
    this.centerLng = m.Longitude;
  }
  // DBからデータを取得する
  getMapData(){
  }
  // ボタン押下イベント↓
  // TimeTrip画面へ遷移
  goToTimeTrip() {
    this._navigator.nativeElement.pushPage(TimeTrip, {data: {"year": 2018 , "LocationID":"1"}});
  }
  // アップロード画面へ遷移
  goToUpload() {
    this._navigator.nativeElement.pushPage(Upload, {data: {"year": 2018 , "LocationID":"1"}});
  }
}
// マーカー用インタフェース
interface marker{
  LocationID:number;//ロケーションID
  Address:string;//住所
  Latitude:number;//x座標
  Longitude:number;//y座標
  Url:string;//アイコンのURL
  // Title:string//タイトル
}