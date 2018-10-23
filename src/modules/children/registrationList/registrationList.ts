import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'registrationList',
  template: require('./registrationList.html'),
  styles: [
  	'./registrationList.css'
  ]
})
export class RegistrationList {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }

  alert2() {
    ons.notification.toast('保坂参上！！');
  }
}
