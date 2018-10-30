import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {OnsNavigator,OnsenModule} from 'ngx-onsenui' 

@Component({
  selector: "onspage[title='registrationList']",
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
    { PhotoId: "p001", LocationID: "a001", Title: "幌別駅前通り 1984.", Comment: "北口駅前の様子。情調ある風景が感慨を感じさせる。"},
    { PhotoId: "p002", LocationID: "a001", Title: "幌別駅前通り 2018.", Comment: "北口駅前の様子。無機質な町並が現実を実感させる。" },
    { PhotoId: "p003", LocationID: "a001", Title: "幌別駅前通り 2050.", Comment: "北口駅前の様子。人間もペットも電子になりました。" },
    { PhotoId: "p004", LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が府中市Jタワーより移転した年。" },
    { PhotoId: "p005", LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。" },
    { PhotoId: "p006", LocationID: "a002", Title: "京王府中一丁目ビル", Comment: "本社JSWが事実上日本を支配した年。"},
    { PhotoId: "p007", LocationID: "a003", Title: "宮古市魚菜市場　開業", Comment: "宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。" },
    { PhotoId: "p008", LocationID: "a003", Title: "宮古市魚菜市場　開業30周年", Comment: "宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。" },
    { PhotoId: "p009", LocationID: "a003", Title: "宮古市魚菜市場　開業100周年", Comment: "宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。"},
  ];
}

class RegistrationInfo {
  PhotoId: string;
  LocationID: string;
  Title: string;
  Comment: string;
}
