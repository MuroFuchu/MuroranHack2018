import {Component, NgZone} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' ;
import {MapsAPILoader,GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'map',
  template: require('./map.html'),
  styles: [`
  .map_area {
    height:90%;
  }
  .btn_area {
    height:10%;
  }
  agm-map {
    height: 90%;
  }
  `
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


  constructor(private _navigator: OnsNavigator) {
    //座標
    this.getGeo();//現在地を取得
    this.centerLat = this.presentLat;
    this.centerLng = this.presentLng;
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
      {lat:42.339825, lng:140.943745,url:'../images/icon/pin_free.svg',areaName:'室蘭水族館'},
      {lat:42.319695, lng:140.986877,url:'../images/icon/pin_free.svg',areaName:'日本製鋼所'},
      {lat:42.318910, lng:140.972560,url:'../images/icon/pin_free.svg',areaName:'日鋼倉庫'},
      {lat:42.318417, lng:140.970667,url:'../images/icon/pin_free.svg',areaName:'室蘭中央通り'},
      // {lat:, lng:,url:'../images/icon/pin_free.svg',areaName:'日鋼倉庫',tel:'09012341234',waitingNo:1,reservationNo:10 },
    ];
    
  }

  // // ↓過去の遺物
  // alert() {
  //   ons.notification.alert('This is an Onsen UI alert notification.');
  // }

  // alert2() {
  //   ons.notification.toast('保坂参上！！');
  // }
}
// マーカー用インタフェース
interface marker{
  lat:number;//x座標
  lng:number;//y座標
  url:string;//URL、住所
  areaName:string;
  /*↓この辺使わんでしょう */
  // tel:string;
  // waitingNo:number;
  // reservationNo:number;
  /*↑この辺使わんでしょう */
}