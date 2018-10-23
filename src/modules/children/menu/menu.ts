import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'menu',
  template: require('./menu.html'),
  styles: [
  	'./menu.css'
  ]
})
export class Menu {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }

  alert2() {
    ons.notification.toast('保坂参上！！');
  }
}
