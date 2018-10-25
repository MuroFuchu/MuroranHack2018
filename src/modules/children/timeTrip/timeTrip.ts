import { OnInit, Component, ViewChild } from '@angular/core';
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
.left {
  float: left;
  margin-right: 3px;
}
 
.item {
  margin-bottom: 30px;
}

.title {
  font-size: 20px;
  margin-top: 10px;
}

.material-icons {
  font-size:35px;
}

.btn {
  color: black;
  background-color: transparent;
  box-shadow: none;
  height: 35px;
  width: 35px;
  padding: 0px;
  margin-right: 10px;
}

.adressSelect{
  width: calc(100% - 35px - 10px);
}

.carousel_item {
  position: absolute; 
  bottom: 0; 
  right: 30px; 
  margin-bottom: 10px;
  font-size: 30px;
  color: dimgray;;
}

.photoModal {
  height: 300px;
  width: 300px;
  background: lightgray;
  margin: auto;
}

.modal_text {
  position: relative;
  top: 250px;
  left: 90px;
  font-size: 30px;
  color: dimgray;
}

#carousel {
  height: 200px; 
  width: 80%;
  margin: 0 auto;
}
  `]})
export class TimeTrip {
  constructor(private _navigator: OnsNavigator) {}
  @ViewChild('carousel') carousel;
 
  adressListDB: Adress[] = [
    { LocationID: "a001", Address: "北海道登別市幌別町３－２０", Latitude: 10, longitude: 10 },
    { LocationID: "a002", Address: "東京都府中市府中町１－９", Latitude: 20, longitude: 10 },  
    { LocationID: "a003", Address: "岩手県宮古市五月町１－１", Latitude: 50, longitude: 10 },
  ];
  infoListDB: TimeTripPhotoInfo[] = [
    { PhotoId: "p001", Year: 1984, LocationID: "a001", Title: "幌別駅前通り 1984.", Comment: "北口駅前の様子。情調ある風景が感慨を感じさせる。", bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p002", Year: 2018, LocationID: "a001", Title: "幌別駅前通り 2018.", Comment: "北口駅前の様子。無機質な町並が現実を実感させる。", bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p003", Year: 2050, LocationID: "a001", Title: "幌別駅前通り 2050.", Comment: "北口駅前の様子。人間もペットも電子になりました。", bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p004", Year: 2014, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が府中市Jタワーより移転した年。", bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p005", Year: 2018, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。", bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p006", Year: 2062, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "本社JSWが事実上日本を支配した年。", bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p007", Year: 1978, LocationID: "a003", Title: "宮古市魚菜市場　開業", Comment: "宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。", bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p008", Year: 2018, LocationID: "a003", Title: "宮古市魚菜市場　開業30周年", Comment: "宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。", bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p009", Year: 2088, LocationID: "a003", Title: "宮古市魚菜市場　開業100周年", Comment: "宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。", bin: "k8aa", LastUpdateDate: "20181025" },
  ];
 
  adress: Adress = null;
  locationId: string = "";
  infoList: TimeTripPhotoInfo[] = [];
  info: TimeTripPhotoInfo = null;

  isVisible: boolean = true;
 
  ngOnInit() {
    // 遷移元画面から位置情報マスタを取得
  　this.adress = this.adressListDB[0];
    this.locationId = this.adress.LocationID;

    this.setInfoList(this.adress);

    var index = this.infoList.findIndex(s => s.PhotoId == this.info.PhotoId);
    this.carousel.nativeElement.setAttribute("initial-index", index.toString());
  }

  toPostChane(event) {
    this.info = this.infoList[event.activeIndex];
  }

  changeAdress(event) {
    this.adress = this.adressListDB.find(f => f.LocationID == event.target.value);
    this.setInfoList(this.adress);
    this.reloadCarousel();
  }

  setInfoList(adress: Adress) {
    this.infoList = this.infoListDB.filter(f => f.LocationID == adress.LocationID);
    this.info = this.infoList[1];
  }
  
  goToMenu() {
  　this._navigator.nativeElement.pushPage(Menu, {data: {hoge: "fuga"}});
  }

  private reloadCarousel() {
    var index = this.infoList.findIndex(s => s.PhotoId == this.info.PhotoId);
    this.carousel.nativeElement.refresh();
    this.carousel.nativeElement.setActiveIndex(index);
  }
}
 
class Adress {
  LocationID: string;
  Address: string;
  Latitude: number;
  longitude: number;
}

class TimeTripPhotoInfo {
  PhotoId: string;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  bin: string;
  LastUpdateDate: string;
}