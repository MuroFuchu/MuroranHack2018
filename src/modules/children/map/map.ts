import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'map',
  template: require('./map.html'),
  styles: [
  	'./map.css'
  ]
})
export class Map {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }

  alert2() {
    ons.notification.toast('保坂参上！！');
  }
}
