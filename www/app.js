(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{128:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(14),r=function(){function t(){this.pictLocationID="",this.pictAddress="府中市府中町京王ビル",this.pictYear=0,this.pictTitle="",this.pictComment="",this.selectedModifier="basic",this.modifiers=[{value:"basic",label:"Basic"},{value:"material",label:"Material"},{value:"underbar",label:"Underbar"}]}return t.prototype.alert=function(){s.notification.toast("保坂参上！")},t=o([a.Component({selector:"upload",template:n(170),styles:["./upload.css"]}),i("design:paramtypes",[])],t)}();e.Upload=r},129:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(14),r=n(520),c=function(){function t(t){this._navigator=t}var e;return t.prototype.alert=function(){s.notification.alert("This is an Onsen UI alert notification.")},t.prototype.alert2=function(){s.notification.toast("保坂参上！！")},t=o([a.Component({selector:"registrationList",template:n(171),styles:["./registrationList.css"]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.RegistrationList=c},130:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(14),r=n(520),c=function(){function t(t){this._navigator=t}var e;return t.prototype.alert=function(){s.notification.alert("This is an Onsen UI alert notification.")},t.prototype.alert2=function(){s.notification.toast("保坂参上！！")},t=o([a.Component({selector:"map",template:n(172),styles:["\n  .map_area {\n    height:90%;\n  }\n  .btn_area {\n    height:10%;\n  }\n  "]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.Map=c},131:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(520),r=n(130),c=n(129),l=n(128),d=function(){function t(t){this._navigator=t}var e;return t.prototype.goToMap=function(){this._navigator.nativeElement.pushPage(r.Map,{data:{hoge:"fuga"}})},t.prototype.goToRegistrationList=function(){this._navigator.nativeElement.pushPage(c.RegistrationList,{data:{hoge:"fuga"}})},t.prototype.goToUpload=function(){this._navigator.nativeElement.pushPage(l.Upload,{data:{hoge:"fuga"}})},t=o([a.Component({selector:"menu",template:n(169),styles:["\n  \n  .content{\n    background-color:#f9d3d3;\n  }\n  .menu_title{\n    text-align:center;\n    font-family:Impact;\n    font-size:50px;\n    color:brown;\n    margin:40px 0 100px 0;\n  }\n\n  .content ons-button{\n    width:120px;\n    height:90px;\n    line-height: 20px;\n    margin:10px;\n    padding-top:10px;\n  }\n\n  .material-icons{\n    font-size:40px;\n  }\n\n  .menu_btn_Time_Trip{\n    background-color:#ffb553;\n  }\n\n  .menu_btn_Registrations{\n    background-color:#4bb5e0;\n  }\n\n  .menu_btn_map{\n    background-color:#ff716e;\n  }\n\n  .menu_btn_Upload{\n    background-color:#34314b;\n  }\n  "]}),i("design:paramtypes",["function"==typeof(e=void 0!==s.OnsNavigator&&s.OnsNavigator)&&e||Object])],t)}();e.Menu=d},134:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=134},167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(31),n(127),n(0),n(133),n(520)},168:function(t,e){t.exports="<ons-navigator animation=slide swipeable [page]=initialPage></ons-navigator>"},169:function(t,e){t.exports='<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel=stylesheet> <ons-page> <ons-toolbar> <div class=center>Menu</div> </ons-toolbar> <div class=content> <div class=menu_title> Time Trip <br> Photo Gallery </div> <div id=message>{{msg}}</div> <div style=text-align:center;margin:10px> <ons-button (click)=goToTimeTrip(navi) class=menu_btn_Time_Trip> <i class=material-icons>restore</i><br>Time Trip </ons-button> <ons-button (click)=goToRegistrationList(navi) class=menu_btn_Registrations> <i class=material-icons>view_list</i><br>Registrations </ons-button> <br> <ons-button (click)=goToMap(navi) class=menu_btn_map> <i class=material-icons>place</i><br>Map </ons-button> <ons-button (click)=goToUpload(navi) class=menu_btn_Upload> <i class=material-icons>arrow_upward</i><br>Upload </ons-button> </div> </div> </ons-page> '},170:function(t,e){t.exports='<ons-page> <ons-toolbar> <div class=center>写真アップロード画面2</div> </ons-toolbar> <div class=content> <div> <p><i class=material-icons>home</i>{{pictAddress}}</p> </div> <ons-list> <ons-list-header>写真のタイトルを入力してください！</ons-list-header> <ons-list-item> <ons-input placeholder="" [(value)]=pictTitle></ons-input> </ons-list-item> <ons-list-header>写真のコメントを入力してください！</ons-list-header> <ons-list-item> <ons-input placeholder="" [(value)]=pictComment></ons-input> </ons-list-item> </ons-list> </div> </ons-page> '},171:function(t,e){t.exports="<ons-page> <ons-toolbar> <div class=center>RegistrationList</div> <div class=right><ons-back-button>Back</ons-back-button></div> </ons-toolbar> <div class=content> <ons-list> <ons-list-header>Dialog Sample</ons-list-header> <ons-list-item (click)=alert()>Alert</ons-list-item> <ons-list-item (click)=alert2()>Alert2</ons-list-item> </ons-list> <p>大平参上！！！</p> </div> </ons-page> "},172:function(t,e){t.exports="<ons-page> <ons-toolbar> <div class=center>Map</div> <div class=right><ons-back-button>Back</ons-back-button></div> </ons-toolbar> <div class=map_area> </div> <div class=btn_area> </div> </ons-page> "},173:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(131),r=function(){function t(){this.initialPage=s.Menu}return t=o([a.Component({selector:"app",template:n(168),styles:["./app.css"]}),i("design:paramtypes",[])],t)}();e.MyApp=r},179:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0}),n(178),n(176);var i=n(0),a=n(27),s=n(62),r=n(127),c=n(133),l=n(520),d=n(173),p=n(131),f=n(130),u=n(129),m=n(128),h=n(522);i.enableProdMode();var g=function(){function t(){}return t=o([i.NgModule({imports:[l.OnsenModule,c.HttpModule,a.CommonModule,s.FormsModule],declarations:[d.MyApp,p.Menu,f.Map,u.RegistrationList,m.Upload,h.TimeTrip],entryComponents:[p.Menu,f.Map,u.RegistrationList,m.Upload,h.TimeTrip],bootstrap:[d.MyApp],schemas:[i.CUSTOM_ELEMENTS_SCHEMA]})],t)}();r.platformBrowserDynamic().bootstrapModule(g).catch(function(t){return console.error(t)})},369:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(368),n(180)},370:function(t,e,n){n(369),n(179),t.exports=n(167)},521:function(t,e){t.exports='<ons-page> <ons-toolbar> <div class=left><ons-back-button>Back</ons-back-button></div> <div class=center>TimeTrip</div> </ons-toolbar> <div class=content> <ons-list style=height:100%> <ons-list-item style=width:100%> <ons-button class=btn (click)=goToMenu(navi)> <i class=material-icons>home</i> </ons-button> <ons-select class=adressSelect [(ngmodel)]=locationId (change)=changeAdress($event)> <option *ngfor="let adressItem of adressListDB" [value]=adressItem.LocationID> {{ adressItem.Address }} </option> </ons-select> </ons-list-item> <ons-list-item style=width:100%> <ons-carousel #carousel swipeable auto-scroll id=carousel (postchange)=toPostChane($event)> <ons-carousel-item *ngfor="let item of infoList" style=background:#d3d3d3 (click)=modal.show()> <div class=carousel_item> {{item.Year}} </div> </ons-carousel-item> </ons-carousel> </ons-list-item> <ons-list-item> <div align=center style=width:100%> <div class="item title">{{info.Title}}</div> <div class=item>{{info.Comment}}</div> <div class=item><ons-button (click)=toNext() class=btn><i class=material-icons>edit</i></ons-button></div> </div> </ons-list-item> </ons-list> </div> </ons-page> <ons-modal #modal (click)=modal.hide()> <div class=photoModal> <div class=modal_text> {{info.Year}} </div> </div> </ons-modal>'},522:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(131),r=n(520),c=function(){function t(t){this._navigator=t,this.adressListDB=[{LocationID:"a001",Address:"北海道登別市幌別町３－２０",Latitude:10,longitude:10},{LocationID:"a002",Address:"東京都府中市府中町１－９",Latitude:20,longitude:10},{LocationID:"a003",Address:"岩手県宮古市五月町１－１",Latitude:50,longitude:10}],this.infoListDB=[{PhotoId:"p001",Year:1984,LocationID:"a001",Title:"幌別駅前通り 1984.",Comment:"北口駅前の様子。情調ある風景が感慨を感じさせる。",bin:"sj01",LastUpdateDate:"20181025"},{PhotoId:"p002",Year:2018,LocationID:"a001",Title:"幌別駅前通り 2018.",Comment:"北口駅前の様子。無機質な町並が現実を実感させる。",bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p003",Year:2050,LocationID:"a001",Title:"幌別駅前通り 2050.",Comment:"北口駅前の様子。人間もペットも電子になりました。",bin:"k8aa",LastUpdateDate:"20181025"},{PhotoId:"p004",Year:2014,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が府中市Jタワーより移転した年。",bin:"sj01",LastUpdateDate:"20181025"},{PhotoId:"p005",Year:2018,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。",bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p006",Year:2062,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"本社JSWが事実上日本を支配した年。",bin:"k8aa",LastUpdateDate:"20181025"},{PhotoId:"p007",Year:1978,LocationID:"a003",Title:"宮古市魚菜市場　開業",Comment:"宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。",bin:"sj01",LastUpdateDate:"20181025"},{PhotoId:"p008",Year:2018,LocationID:"a003",Title:"宮古市魚菜市場　開業30周年",Comment:"宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。",bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p009",Year:2088,LocationID:"a003",Title:"宮古市魚菜市場　開業100周年",Comment:"宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。",bin:"k8aa",LastUpdateDate:"20181025"}],this.adress=null,this.locationId="",this.infoList=[],this.info=null,this.isVisible=!0}var e;return t.prototype.ngOnInit=function(){var t=this;this.adress=this.adressListDB[0],this.locationId=this.adress.LocationID,this.setInfoList(this.adress);var e=this.infoList.findIndex(function(e){return e.PhotoId==t.info.PhotoId});this.carousel.nativeElement.setAttribute("initial-index",e.toString())},t.prototype.toPostChane=function(t){this.info=this.infoList[t.activeIndex]},t.prototype.changeAdress=function(t){this.adress=this.adressListDB.find(function(e){return e.LocationID==t.target.value}),this.setInfoList(this.adress),this.reloadCarousel()},t.prototype.setInfoList=function(t){this.infoList=this.infoListDB.filter(function(e){return e.LocationID==t.LocationID}),this.info=this.infoList[1]},t.prototype.goToMenu=function(){this._navigator.nativeElement.pushPage(s.Menu,{data:{hoge:"fuga"}})},t.prototype.reloadCarousel=function(){var t=this,e=this.infoList.findIndex(function(e){return e.PhotoId==t.info.PhotoId});this.carousel.nativeElement.refresh(),this.carousel.nativeElement.setActiveIndex(e)},o([a.ViewChild("carousel"),i("design:type",Object)],t.prototype,"carousel",void 0),t=o([a.Component({selector:"timeTrip",template:n(521),styles:["\n.left {\n  float: left;\n  margin-right: 3px;\n}\n \n.item {\n  margin-bottom: 30px;\n}\n\n.title {\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.material-icons {\n  font-size:35px;\n}\n\n.btn {\n  color: black;\n  background-color: transparent;\n  box-shadow: none;\n  height: 35px;\n  width: 35px;\n  padding: 0px;\n  margin-right: 10px;\n}\n\n.adressSelect{\n  width: calc(100% - 35px - 10px);\n}\n\n.carousel_item {\n  position: absolute; \n  bottom: 0; \n  right: 30px; \n  margin-bottom: 10px;\n  font-size: 30px;\n  color: dimgray;;\n}\n\n.photoModal {\n  height: 300px;\n  width: 300px;\n  background: lightgray;\n  margin: auto;\n}\n\n.modal_text {\n  position: relative;\n  top: 250px;\n  left: 90px;\n  font-size: 30px;\n  color: dimgray;\n}\n\n#carousel {\n  height: 200px; \n  width: 80%;\n  margin: 0 auto;\n}\n  "]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.TimeTrip=c}},[[370,0,1]]]);