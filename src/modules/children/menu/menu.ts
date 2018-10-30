import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 

import {Map} from '../map/map';
import {RegistrationList} from '../registrationList/registrationList';
import {Upload} from '../upload/upload';
import { TimeTrip } from '../timeTrip/timeTrip';
@Component({
  selector: "ons-page[title='menu']",
  template: require('./menu.html'),
  styles: [`
  
  .content{
    background-color:#f9d3d3;
  }
  .menu_title{
    text-align:center;
    font-family:Impact;
    font-size:50px;
    color:brown;
    margin:40px 0 100px 0;
  }

  .content ons-button{
    width:120px;
    height:90px;
    line-height: 20px;
    margin:10px;
    padding-top:10px;
  }

  .material-icons{
    font-size:40px;
  }

  .menu_btn_Time_Trip{
    background-color:#ffb553;
  }

  .menu_btn_Registrations{
    background-color:#4bb5e0;
  }

  .menu_btn_map{
    background-color:#ff716e;
  }

  .menu_btn_Upload{
    background-color:#34314b;
  }
  `
    ]
})
export class Menu {
  constructor(private _navigator: OnsNavigator) {}

  goToTimeTrip() {
    this._navigator.nativeElement.pushPage(TimeTrip, {data: {"year": 2018 , "LocationID":"a002"}});
  }
  
  goToMap() {
    this._navigator.nativeElement.pushPage(Map, {data: {hoge: "fuga"}});
  }

  goToRegistrationList() {
    this._navigator.nativeElement.pushPage(RegistrationList, {data: {hoge: "fuga"}});
  }

  goToUpload() {
    this._navigator.nativeElement.pushPage(Upload, {data: {hoge: "fuga"}});
  }
}
