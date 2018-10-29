import {Component, NgZone, Injectable} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' ;
import {MapsAPILoader,GoogleMapsAPIWrapper } from '@agm/core';
import { TimeTrip } from '../timeTrip/timeTrip';
import {Upload} from '../upload/upload';

import { IndexedDbService } from '../../../services/IndexedDbService';//ﾃﾞｭｸｼ

@Component({
  selector: 'ons-page[map]',
  // selector: 'map',
  template: require('./map.html'),
  // styleUrls: ['../src/modules/children/map/map.css']
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
  }
  `]
})

export class Map {
  locationID: number;
  presentLat: number;
  presentLng: number;
  centerLat:number;
  centerLng:number;
  markers: marker[] = [];
  zone: NgZone;
  apiLoader: MapsAPILoader;
  apiWrapper:GoogleMapsAPIWrapper;
  map;
  iconPathTrip: string = require('../../../../contents/buttons/goToTrip.png');
  iconPathRegist: string = require('../../../../contents/buttons/goToRegist.png');

  constructor(private _navigator: OnsNavigator , private _indexedDbService: IndexedDbService) {
    //座標
    this.getGeo();//現在地を取得
    this.centerLat = this.presentLat;
    this.centerLng = this.presentLng;
    console.log(this.centerLat);
    console.log(this.centerLng);
    this.getMapData(this.centerLat,this.centerLng);
    this.displayPin();
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
        comp.presentLat = 42.319744;//室蘭NISCO仕様
        comp.presentLng = 140.986007;//室蘭NISCO仕様

        console.log(`${comp.presentLat} / ${comp.presentLng}`);
        // var data = await this._indexedDbService.getMstLocationByRange(lat,lng);
        comp.changeCenter(comp.presentLat,comp.presentLng);
        comp.getMapData(comp.centerLat,comp.centerLng);
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
    // this.getGeo();
   
  }
  //選択したマーカーの情報を取得する
  clickMarker(m: marker){
    this.locationID = m.LocationID;
    this.changeCenter(m.LocationID,m.Longitude);
  }
  //指定された座標を中心にする
  changeCenter(lat:number, lng:number){
    this.centerLat = lat;
    this.centerLng = lng;
  }
  // DBからデータを取得する
  async getMapData(lat:number, lng:number){
    var data = await this._indexedDbService.getMstLocationByRange(lat,lng);
    if(data==null){
      console.log('データが取得できなかった');
      this.markers = [];
    }else{
      data.forEach(data => {
        this.markers.push(
          { LocationID:data.LocationID,
            Title:data.Title,
            Address:data.Address,
            Latitude:data.Latitude,
            Longitude:data.Longitude,
            Url:'./contents/icons/pin_normal.svg'
          }
        );
      });
    }
  }
  // ボタン押下イベント↓
  // TimeTrip画面へ遷移
  goToTimeTrip() {
    if(this.locationID == undefined)
    {
      alert("閲覧したい箇所を選択してください。");
    }else{
      this._navigator.nativeElement.pushPage(TimeTrip, {data: {"year": undefined , "LocationID":this.locationID}});
    }
  }
  // アップロード画面へ遷移
  goToUpload() {
    if(this.locationID == undefined)
    {
      alert("閲覧したい箇所を選択してください。");
    }else{
      this._navigator.nativeElement.pushPage(Upload, {data: {"year": 2018 , "LocationID":this.locationID}});
    }
  }
}
// マーカー用インタフェース
interface marker{
  LocationID:number;//ロケーションID
  Title:string;//タイトル
  Address:string;//住所
  Latitude:number;//x座標
  Longitude:number;//y座標
  Url:string;//アイコンのURL
  // Title:string//タイトル
}