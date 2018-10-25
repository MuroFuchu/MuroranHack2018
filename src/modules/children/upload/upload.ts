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

  pictLocationID: string = '';
  pictAddress: string = '府中市府中町京王ビル';
  pictYear: number = 0;
  pictTitle: string = '';
  pictComment: string = '';

  selectedModifier: string = 'basic';
  modifiers = [
    {value: 'basic', label: 'Basic'},
    {value: 'material', label: 'Material'},
    {value: 'underbar', label: 'Underbar'}
  ];

  alert() {
    ons.notification.toast('保坂参上！');
  }

}
