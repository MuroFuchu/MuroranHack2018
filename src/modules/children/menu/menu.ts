import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 

import {Map} from '../map/map';
import {RegistrationList} from '../registrationList/registrationList';
import {Upload} from '../upload/upload';

@Component({
  selector: 'menu',
  template: require('./menu.html'),
  styles: [
  	'./menu.css'
  ]
})
export class Menu {
  constructor(private _navigator: OnsNavigator) {}

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
