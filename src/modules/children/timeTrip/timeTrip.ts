import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'timeTrip',
  template: require('./TimeTrip.html'),
  styles: [
  	'./timeTrip.css'
  ]
})
export class TimeTrip {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }

  alert2() {
    ons.notification.toast('保坂参上！！');
  }
}
