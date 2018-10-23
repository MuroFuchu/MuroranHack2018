import {Component} from '@angular/core';
import * as ons from 'onsenui';
import { Menu } from '../modules/children/menu/menu';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
  	'./app.css'
  ]
})
export class MyApp {
  constructor() {}

  initialPage = Menu;
}
