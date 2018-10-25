import { OnInit,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as ons from 'onsenui';
import { Menu } from '../menu/menu';
import {
  OnsSelect,
  OnsenModule,
  CUSTOM_ELEMENTS_SCHEMA,
  OnsNavigator,
} from 'ngx-onsenui';
 
@Component({
  selector: 'timeTrip',
  template: require('./timeTrip.html'),
  styles: [`
.right {
  float: right;
  margin-right: 3px;
}
 
.item {
  margin-bottom: 10px;
}

.material-icons {
  font-size:35px;
}

.btn {
  color: black;
  background-color: transparent;
}
  `]})
export class TimeTrip {
  constructor(private _navigator: OnsNavigator) {}
 
  adressList: Adress[] = [
    { LocationID: "001", Address: "東京都府中市府中町１－１０", Latitude: 10, longitude: 10 },
    { LocationID: "002", Address: "東京都府中市日鋼１－１", Latitude: 10, longitude: 10 },  
    { LocationID: "003", Address: "東京都府中市東芝町５－１２－１", Latitude: 10, longitude: 10 },
  ];
 
  adress: Adress = null;
 
  ngOnInit() {
  　this.adress = this.adressList[0];
  }
  
  alert() {
  　ons.notification.alert('This is an Onsen UI alert notification.');
  }
  
  alert2() {
  　ons.notification.toast('保坂参上！！');
  }
  
  goToMenu() {
  　this._navigator.nativeElement.pushPage(Menu, {data: {hoge: "fuga"}});
  }
}
 
class Adress {
  LocationID: string;
  Address: string;
  Latitude: number;
  longitude: number;
}