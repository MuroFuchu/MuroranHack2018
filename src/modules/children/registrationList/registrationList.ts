import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 

@Component({
  selector: 'ons-page[registrationList]',
  template: require('./registrationList.html'),
  styles: [
  	`
    .registration_title{
      font-size:20px;
      font-weight:bold;
    }
    .registration_comment{
      font-size:14px;
      
    }
    `
  ]
})
export class RegistrationList {
  constructor(private _navigator: OnsNavigator) {}
  
  RegistrationList: RegistrationInfo[] = [
    { PhotoId: "p001", Year: 1984, LocationID: "a001", Title: "幌別駅前通り 1984.", Comment: "北口駅前の様子。情調ある風景が感慨を感じさせる。", Bin: "aaa", LastUpdateDate: "20181025" },
    { PhotoId: "p002", Year: 2018, LocationID: "a001", Title: "幌別駅前通り 2018.", Comment: "北口駅前の様子。無機質な町並が現実を実感させる。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p003", Year: 2050, LocationID: "a001", Title: "幌別駅前通り 2050.", Comment: "北口駅前の様子。人間もペットも電子になりました。", Bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p004", Year: 2014, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が府中市Jタワーより移転した年。", Bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p005", Year: 2018, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p006", Year: 2062, LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "本社JSWが事実上日本を支配した年。", Bin: "k8aa", LastUpdateDate: "20181025" },
    { PhotoId: "p007", Year: 1978, LocationID: "a003", Title: "宮古市魚菜市場　開業", Comment: "宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。", Bin: "sj01", LastUpdateDate: "20181025" },
    { PhotoId: "p008", Year: 2018, LocationID: "a003", Title: "宮古市魚菜市場　開業30周年", Comment: "宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。", Bin: "d82m", LastUpdateDate: "20181025" },
    { PhotoId: "p009", Year: 2088, LocationID: "a003", Title: "宮古市魚菜市場　開業100周年", Comment: "宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。", Bin: "k8aa", LastUpdateDate: "20181025" },
  ];
}

class RegistrationInfo {
  PhotoId: string;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}
