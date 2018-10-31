import * as ons from 'onsenui';
import {Upload} from '../upload/upload';
import {TimeTrip} from '../timeTrip/timeTrip';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' ;
import {Component, NgZone, Injectable, OnInit, EventEmitter} from '@angular/core';
import {MapsAPILoader,GoogleMapsAPIWrapper, MouseEvent } from '@agm/core';
import {IndexedDbService} from '../../../services/IndexedDbService';//ﾃﾞｭｸｼ
import {GoogleMapsAPIWrapperEx} from '../../../services/GoogleMapsAPIWrapperEx';//ｸﾞｰｸﾞﾙ

@Component({
  selector: "ons-page[title='map']",
  template: require('./map.html'),
  // styleUrls: ['../src/modules/children/map/map.css']
  styles: [`
  .map_area {
    height:90%;
  }
  agm-map {
    height: 90%;
  }
  .btn_area {
    height:10%;
    width:100%;
    display:inline-bock;
  }
  .btn_area img {
    height: 100%;
  }
  .btn_icon_style {
    height: 100%;
    width:33.3333%;
    background-color:transparent;
  }
  .btn_icon_style_left {
    text-align: left;
  }
  .btn_icon_style_center {
    text-align: center;
  }
  .btn_icon_style_right {
    text-align: right;
  }
  `]
})

export class Map implements OnInit {
  locationID: string;
  address: string;
  presentLat: number;
  presentLng: number;
  centerLat:number;
  centerLng:number;
  lastClicklat: number;
  lastClicklng: number;
  markers: marker[] = [];
  zone: NgZone;
  apiLoader: MapsAPILoader;
  apiWrapper:GoogleMapsAPIWrapper;
  map;
  txtTitle: string = '';
  selectedAddresses: string = '';// 住所を選択した値が入る
  selectedMarkerPin: string;
  markerPinNormal: string = require('../../../../contents/icons/pin_normal.svg');//マーカーピンのアイコンURL
  markerPinSelected: string = require('../../../../contents/icons/pin_free.svg');//マーカーピンのアイコンURL
  nowPlacePin: string = require('../../../../contents/icons/pin_nowPlace.svg');//マーカーピンのアイコンURL
  iconPathTrip: string = require('../../../../contents/buttons/goToTrip.png');
  iconPathRegist: string = require('../../../../contents/buttons/goToRegist.png');
  addressList:any[];
  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _googleMapsAPIWrapperEx: GoogleMapsAPIWrapperEx) {}

  async ngOnInit() {
    this.getGeo();
    //var address;
    this.addressList = await this._googleMapsAPIWrapperEx.getAddress(42.319744,140.986007); // 住所を探しに行く 
    //if(address == null)
    //{
    //  console.log('nullだった');
    //}else{
    //  //console.log(Object.keys(address));
    //}
  }

  // 現在地を取得する
  async getGeo() {
    var option = { timeout: 6000 }; //タイムアウト値(ミリ秒)
    var comp = this;
    navigator.geolocation.getCurrentPosition(
      function(position){
        comp.presentLat = position.coords.latitude;
        comp.presentLng = position.coords.longitude;
        comp.presentLat =  42.319744;// 室蘭NISCO仕様
        comp.presentLng = 140.986007;// 室蘭NISCO仕様

        comp.changeCenter(comp.presentLat,comp.presentLng);
        comp.getMapData(comp.centerLat,comp.centerLng);
        comp.displayPin();
      },
      function(){
        ons.notification.alert({ message: '現在地を取得できるように設定してください。', title:'現在地が取得できません', callback:function(){
          comp.changeCenter(42.319744,140.986007);//仮の拠点
          comp.getMapData(42.319744,140.986007);
          comp.displayPin();
        }});
      },
      option
    );
    
  }

  // 画面にピンを表示する
  displayPin(){
    this.apiWrapper = new GoogleMapsAPIWrapper(this.apiLoader,this.zone);
    this.apiWrapper.getCenter()
    .then(function(value){
      console.log(value);
    })
    .catch(function(value){
      console.log(value);
    });
   
  }
  // クリックした地図上の座標を取得する
  clickMap($event: MouseEvent){
    this.lastClicklat = $event.coords.lat;
    this.lastClicklng = $event.coords.lng;
    console.log('最後にクリックしたx座標' + this.lastClicklat.toString());
    console.log('最後にクリックしたy座標' + this.lastClicklng.toString());
    console.log('選択した住所→'+this.selectedAddresses.toString());
  }
  //選択したマーカーの情報を取得する
  clickMarker(m: marker){
    this.locationID = m.LocationID;
    this.address = m.Address;
    this.resetPinMarker();//ピンマーカーをすべて初期化する
    m.iconUrl = this.markerPinSelected;
    this.selectedMarkerPin = m.iconUrl;// 新しいアイコン情報を取得する
    this.changeCenter(m.Latitude,m.Longitude);
  }
  //指定された座標を中心にする
  changeCenter(lat:number, lng:number){
    this.centerLat = lat;
    this.centerLng = lng;
  }
  //ピンのマーカーを初期化する
  resetPinMarker(){
    var pin = this;
    pin.markers.filter(function(value){
      if(value.iconUrl === pin.markerPinSelected){
        value.iconUrl = pin.markerPinNormal;
      }
    });    
  }
  // DBからデータを取得する
  async getMapData(lat:number, lng:number){
    var data = await this._indexedDbService.getMstLocationByRange(lat,lng);
    //var data = await this._indexedDbService.getMstLocationInfo();
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
            iconUrl:this.markerPinNormal
          }
        );
      });
    }
  }

  // TimeTrip画面へ遷移
  goToTimeTrip() {
    if(this.locationID == undefined)
    {
      this.alertNonSelectPin();
    }else{
      this._navigator.nativeElement.pushPage(TimeTrip, { data: { LocationID: this.locationID } });
    }
  }
  // アップロード画面へ遷移
  goToUpload() {
    if(this.locationID == undefined)
    {
      this.alertNonSelectPin();
    }else{
      this._navigator.nativeElement.pushPage(Upload, { data: { LocationID: this.locationID, Address: this.address } });
    }
  }
  // アラート類
  alertNonSelectPin() {
    ons.notification.alert({ message: 'ピンを一つ選んでください。', title:'ピンを選択してください。' });
  }
  // 画像をアップロードする
  registMapMst(lat:number, lng:number, tit:string){
    var address;
    address = this._googleMapsAPIWrapperEx.getAddress(lat, lng); // 住所を探しに行く    
    this._indexedDbService.createMstImg(this.createObj(lat, lng, tit, this.selectedAddresses));    
  }
  createObj(lat:number, lng:number, tit:string, address:string){
    return { Title: tit, Address:address, Latitude:lat, Longitude:lng };
  }
}
// マーカー用インタフェース
interface marker{
  LocationID:string;
  Title:string;
  Address:string;
  Latitude:number;
  Longitude:number;
  iconUrl: string;
}