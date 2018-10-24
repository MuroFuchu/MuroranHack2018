import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'upload',
  template: require('./upload.html'),
  styles: [
  	'./upload.css'
  ]
})
export class Upload {
  constructor() {}

  target: string = '';

  alert() {
    ons.notification.toast('保坂参上！');
  }

}
