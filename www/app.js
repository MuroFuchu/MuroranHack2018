(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,s)}c((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),c=n(150),l=function(){function t(t){this.dexieService=t,this.flg="1",this.CheakInitData="CheakInitData",this.MstLocationInfo="MstLocationInfo",this.TrnPhotoInfo="TrnPhotoInfo"}var e;return t.prototype.cheakInitData=function(){return a(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=null,[4,this.dexieService.getByPrimaryKey(this.CheakInitData,this.flg,function(e){t=e})];case 1:return e.sent(),t?[2,!1]:[2,!0]}})})},t.prototype.cheakedInitData=function(){this.dexieService.addOne(this.CheakInitData,{ID:this.flg})},t.prototype.addMultipleLocationInfo=function(t){this.dexieService.addMultiple(this.MstLocationInfo,t)},t.prototype.addOnePhotoInfo=function(t){this.dexieService.addOne(this.TrnPhotoInfo,t)},t.prototype.addMultiplePhotoInfo=function(t){this.dexieService.addMultiple(this.TrnPhotoInfo,t)},t.prototype.getTrnPhotoInfoByKey=function(t){return a(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=null,[4,this.dexieService.getByPrimaryKey(this.TrnPhotoInfo,t,function(t){e=t})];case 1:return n.sent(),[2,e]}})})},t=o([s.Injectable(),i("design:paramtypes",["function"==typeof(e=void 0!==c.DexieService&&c.DexieService)&&e||Object])],t)}();e.IndexedDbService=l},110:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,s)}c((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),c=n(111),l=n(66),u=n(109),d=n(79),p=function(){function t(t,e){this._navigator=t,this._indexedDbService=e,this.adressListDB=[{LocationID:"a001",Address:"北海道登別市幌別町３－２０",Latitude:10,longitude:10},{LocationID:"a002",Address:"東京都府中市府中町１－９",Latitude:20,longitude:10},{LocationID:"a003",Address:"岩手県宮古市五月町１－１",Latitude:50,longitude:10}],this.infoListDB=[{PhotoId:"p001",Year:1984,LocationID:"a001",Title:"幌別駅前通り 1984.",Comment:"北口駅前の様子。情調ある風景が感慨を感じさせる。",Bin:"aaa",LastUpdateDate:"20181025"},{PhotoId:"p002",Year:2018,LocationID:"a001",Title:"幌別駅前通り 2018.",Comment:"北口駅前の様子。無機質な町並が現実を実感させる。",Bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p003",Year:2050,LocationID:"a001",Title:"幌別駅前通り 2050.",Comment:"北口駅前の様子。人間もペットも電子になりました。",Bin:"k8aa",LastUpdateDate:"20181025"},{PhotoId:"p004",Year:2014,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が府中市Jタワーより移転した年。",Bin:"sj01",LastUpdateDate:"20181025"},{PhotoId:"p005",Year:2018,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。",Bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p006",Year:2062,LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"本社JSWが事実上日本を支配した年。",Bin:"k8aa",LastUpdateDate:"20181025"},{PhotoId:"p007",Year:1978,LocationID:"a003",Title:"宮古市魚菜市場　開業",Comment:"宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。",Bin:"sj01",LastUpdateDate:"20181025"},{PhotoId:"p008",Year:2018,LocationID:"a003",Title:"宮古市魚菜市場　開業30周年",Comment:"宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。",Bin:"d82m",LastUpdateDate:"20181025"},{PhotoId:"p009",Year:2088,LocationID:"a003",Title:"宮古市魚菜市場　開業100周年",Comment:"宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。",Bin:"k8aa",LastUpdateDate:"20181025"}],this.adress=null,this.locationId="",this.infoList=[],this.info=null,this.isImgErrList=[]}var e,p;return t.prototype.ngOnInit=function(){return a(this,void 0,void 0,function(){var t,e,n=this;return r(this,function(o){switch(o.label){case 0:return this.adress=this.adressListDB[0],this.locationId=this.adress.LocationID,this.setInfoList(this.adress),t=this.infoList.findIndex(function(t){return t.PhotoId==n.info.PhotoId}),this.carousel.nativeElement.setAttribute("initial-index",t.toString()),[4,this._indexedDbService.getTrnPhotoInfoByKey("1")];case 1:return e=o.sent(),this.infoListDB[0].Bin=e.Bin,[2]}})})},t.prototype.toPostChane=function(t){this.info=this.infoList[t.activeIndex]},t.prototype.changeAdress=function(t){this.adress=this.adressListDB.find(function(e){return e.LocationID==t.target.value}),this.setInfoList(this.adress),this.reloadCarousel()},t.prototype.setInfoList=function(t){this.infoList=this.infoListDB.filter(function(e){return e.LocationID==t.LocationID});var e=new Array(this.infoList.length);this.isImgErrList=this.isImgErrList.fill(!1,0,e.length),this.info=this.infoList[1]},t.prototype.openModal=function(t){this.isImgErrList[t]||this.modal.nativeElement.show()},t.prototype.goToMenu=function(){this._navigator.nativeElement.pushPage(c.Menu,{data:{hoge:"fuga"}})},t.prototype.goToUpload=function(){this._navigator.nativeElement.pushPage(d.Upload,{data:{hoge:"fuga"}})},t.prototype.convertImageSource=function(t){return"data:image/jpg;base64,"+t},t.prototype.reloadCarousel=function(){var t=this,e=this.infoList.findIndex(function(e){return e.PhotoId==t.info.PhotoId});this.carousel.nativeElement.refresh(),this.carousel.nativeElement.setActiveIndex(e)},o([s.ViewChild("carousel"),i("design:type",Object)],t.prototype,"carousel",void 0),o([s.ViewChild("modal"),i("design:type",Object)],t.prototype,"modal",void 0),t=o([s.Component({selector:"timeTrip",template:n(189),styleUrls:["../src/modules/children/timeTrip/timeTrip.css"]}),i("design:paramtypes",["function"==typeof(e=void 0!==l.OnsNavigator&&l.OnsNavigator)&&e||Object,"function"==typeof(p=void 0!==u.IndexedDbService&&u.IndexedDbService)&&p||Object])],t)}();e.TimeTrip=p},111:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(66),s=n(146),c=n(145),l=n(79),u=n(110),d=function(){function t(t){this._navigator=t}var e;return t.prototype.goToTimeTrip=function(){this._navigator.nativeElement.pushPage(u.TimeTrip,{data:{year:2018,LocationID:"1"}})},t.prototype.goToMap=function(){this._navigator.nativeElement.pushPage(s.Map,{data:{hoge:"fuga"}})},t.prototype.goToRegistrationList=function(){this._navigator.nativeElement.pushPage(c.RegistrationList,{data:{hoge:"fuga"}})},t.prototype.goToUpload=function(){this._navigator.nativeElement.pushPage(l.Upload,{data:{hoge:"fuga"}})},t=o([a.Component({selector:"menu",template:n(185),styles:["\n  \n  .content{\n    background-color:#f9d3d3;\n  }\n  .menu_title{\n    text-align:center;\n    font-family:Impact;\n    font-size:50px;\n    color:brown;\n    margin:40px 0 100px 0;\n  }\n\n  .content ons-button{\n    width:120px;\n    height:90px;\n    line-height: 20px;\n    margin:10px;\n    padding-top:10px;\n  }\n\n  .material-icons{\n    font-size:40px;\n  }\n\n  .menu_btn_Time_Trip{\n    background-color:#ffb553;\n  }\n\n  .menu_btn_Registrations{\n    background-color:#4bb5e0;\n  }\n\n  .menu_btn_map{\n    background-color:#ff716e;\n  }\n\n  .menu_btn_Upload{\n    background-color:#34314b;\n  }\n  "]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.Menu=d},145:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(66),s=function(){function t(t){this._navigator=t,this.RegistrationList=[{PhotoId:"p001",LocationID:"a001",Title:"幌別駅前通り 1984.",Comment:"北口駅前の様子。情調ある風景が感慨を感じさせる。"},{PhotoId:"p002",LocationID:"a001",Title:"幌別駅前通り 2018.",Comment:"北口駅前の様子。無機質な町並が現実を実感させる。"},{PhotoId:"p003",LocationID:"a001",Title:"幌別駅前通り 2050.",Comment:"北口駅前の様子。人間もペットも電子になりました。"},{PhotoId:"p004",LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が府中市Jタワーより移転した年。"},{PhotoId:"p005",LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"日鋼情報システム(株)が本社JSWに吸収合併されることが決定した年。"},{PhotoId:"p006",LocationID:"a002",Title:"京王府中一丁目ビル",Comment:"本社JSWが事実上日本を支配した年。"},{PhotoId:"p007",LocationID:"a003",Title:"宮古市魚菜市場　開業",Comment:"宮古市魚菜市場が開業しました。「宮古市をみんなで盛り上げよう」というモットーのもと地元自治体と地元漁師農家の協力によって営業運営される市場です。"},{PhotoId:"p008",LocationID:"a003",Title:"宮古市魚菜市場　開業30周年",Comment:"宮古市魚菜市場が開業30周年を迎えました。日本有数の漁場である三陸沖から水揚げされる魚介類と、地元農家が愛情をこめて育てた野菜がずらりと並びます。"},{PhotoId:"p009",LocationID:"a003",Title:"宮古市魚菜市場　開業100周年",Comment:"宮古市魚菜市場が開業100周年を迎えました。人類が食事をやめ必要なエネルギーのみをインポートする時代でも、昔と変わらず新鮮な食材を売り続けています。"}]}var e;return t=o([a.Component({selector:"registrationList",template:n(186),styles:["\n    .registration_title{\n      font-size:20px;\n      font-weight:bold;\n    }\n    .registration_comment{\n      font-size:14px;\n      \n    }\n    "]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.RegistrationList=s},146:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(66),s=n(144),c=n(110),l=n(79),u=function(){function t(t){this._navigator=t,this.presentLat=42.319695,this.presentLng=140.986877,this.markers=[],this.iconPath=n(188),this.getGeo(),this.centerLat=this.presentLat,this.centerLng=this.presentLng,this.displayPin(),this.getMapData()}var e;return t.prototype.getGeo=function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.presentLat=e.coords.latitude,t.presentLng=e.coords.longitude,t.presentLat=42.319695,t.presentLng=140.986877,console.log(t.presentLat+" / "+t.presentLng)},function(){alert("error")},{timeout:6e3})},t.prototype.displayPin=function(){this.apiWrapper=new s.GoogleMapsAPIWrapper(this.apiLoader,this.zone),this.apiWrapper.getCenter().then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.getGeo(),this.markers=[{LocationID:1,Address:"あ",Latitude:42.339825,Longitude:140.943745,Url:"../contents/icons/pin_normal.svg"},{LocationID:2,Address:"い",Latitude:42.319695,Longitude:140.986877,Url:"../contents/icons/pin_normal.svg"},{LocationID:3,Address:"う",Latitude:42.31891,Longitude:140.97256,Url:"../contents/icons/pin_normal.svg"},{LocationID:4,Address:"え",Latitude:42.318417,Longitude:140.970667,Url:"../contents/icons/pin_normal.svg"}]},t.prototype.changeCenter=function(t){this.centerLat=t.Latitude,this.centerLng=t.Longitude},t.prototype.getMapData=function(){},t.prototype.goToTimeTrip=function(){this._navigator.nativeElement.pushPage(c.TimeTrip,{data:{year:2018,LocationID:"1"}})},t.prototype.goToUpload=function(){this._navigator.nativeElement.pushPage(l.Upload,{data:{year:2018,LocationID:"1"}})},t=o([a.Component({selector:"map",template:n(187),styles:["\n.map_area {\n    height:90%;\n  }\n  .btn_area {\n    height:10%;\n  }\n  .btn_area li {\n    display:inline-block;\n  }\n  agm-map {\n    height: 90%;\n  }"]}),i("design:paramtypes",["function"==typeof(e=void 0!==r.OnsNavigator&&r.OnsNavigator)&&e||Object])],t)}();e.Map=u},153:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=153},183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(34),n(142),n(0),n(152),n(66)},184:function(t,e){t.exports="<ons-navigator animation=slide swipeable [page]=initialPage></ons-navigator> "},185:function(t,e){t.exports='<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel=stylesheet> <ons-page> <ons-toolbar> <div class=center>Menu</div> </ons-toolbar> <div class=content> <div class=menu_title> Time Trip <br> Photo Gallery </div> <div id=message>{{msg}}</div> <div style=text-align:center;margin:10px> <ons-button (click)=goToTimeTrip(navi) class=menu_btn_Time_Trip> <i class=material-icons>restore</i><br>Time Trip </ons-button> <ons-button (click)=goToRegistrationList(navi) class=menu_btn_Registrations> <i class=material-icons>view_list</i><br>Registrations </ons-button> <br> <ons-button (click)=goToMap(navi) class=menu_btn_map> <i class=material-icons>place</i><br>Map </ons-button> <ons-button (click)=goToUpload(navi) class=menu_btn_Upload> <i class=material-icons>arrow_upward</i><br>Upload </ons-button> </div> </div> </ons-page> '},186:function(t,e){t.exports='<ons-page> <ons-toolbar> <div class=center>Registrations</div> <div class=right><ons-back-button>Back</ons-back-button></div> </ons-toolbar> <div class=content> <ons-list style=height:100%> <ons-list-item style=width:100% *ngFor="let Registration of RegistrationList" [value]=Registration.Title> <span class=registration_title>{{ Registration.Title }}</span> <br> <span class=registration_comment>{{ Registration.Comment }}</span> </ons-list-item> </ons-list> </div> </ons-page> '},187:function(t,e){t.exports="<ons-page> <ons-toolbar> <div class=center>Map</div> <div class=right><ons-back-button>Back</ons-back-button></div> </ons-toolbar> <agm-map [latitude]=centerLat [longitude]=centerLng> <agm-marker *ngFor=\"let m of markers;\" [latitude]=m.Latitude [longitude]=m.Longitude [iconUrl]=\"{\r\n        url:presentPin,\r\n        scaledSize: {\r\n        width: 40,\r\n        height: 40\r\n        }\r\n      }\" [label]=\"{\r\n        text: m.Address,\r\n        fontSize: '15px',\r\n        fontWeight: '700'\r\n      }\" (markerClick)=changeCenter(m)> <agm-info-window> <table> <tr> <td>タイトル</td> <td>{{m.Address}}</td> </tr> </table> </agm-info-window> </agm-marker> <agm-marker [latitude]=presentLat [longitude]=presentLng [iconUrl]=\"{\r\n          url:presentPin,\r\n          scaledSize: {\r\n          width: 40,\r\n          height: 40\r\n          }\r\n        }\" [label]=\"{\r\n          text: '日本製鋼所',\r\n          fontSize: '15px',\r\n          fontWeight: '700'\r\n        }\"> </agm-marker> </agm-map> <div class=btn_area> <img [src]=iconPath alt=ぼたん height=100%> </div> </ons-page> "},188:function(t,e,n){t.exports=n.p+"assets/goToTrip.d7137d78c91ba535577c30d3e75e9e65.png"},189:function(t,e){t.exports='<ons-page> <ons-toolbar> <div class=left><ons-back-button>Back</ons-back-button></div> <div class=center>TimeTrip</div> </ons-toolbar> <div class=content> <ons-list> <ons-list-item style=width:100%> <ons-button class=btn (click)=goToMenu(navi)> <i class=material-icons>home</i> </ons-button> <ons-select class=adressSelect [(ngModel)]=locationId (change)=changeAdress($event)> <option *ngFor="let adressItem of adressListDB" [value]=adressItem.LocationID> {{ adressItem.Address }} </option> </ons-select> </ons-list-item> <ons-list-item style=width:100%> <ons-carousel #carousel swipeable auto-scroll id=carousel (postchange)=toPostChane($event)> <ons-carousel-item *ngFor="let item of infoList;let i = index" (click)=openModal(i)> <img class=carousel_photo [src]=item.Bin alt="" (error)="isImgErrList[i] = true"> <div *ngIf=isImgErrList[i] class=carousel_erricon><i class=material-icons>cancel</i></div> </ons-carousel-item> </ons-carousel> </ons-list-item> <ons-list-item> <div align=center style=width:100%> <div class="item title">{{info.Year}} 年</div> <div class="item title">{{info.Title}}</div> <div class=item style=margin-top:50px>{{info.Comment}}</div> <div class=item><ons-button (click)=goToUpload() class=btn><i class=material-icons>edit</i></ons-button></div> </div> </ons-list-item> </ons-list> </div> </ons-page> <ons-modal #modal (click)=modal.hide()> <div class=photoModal> <img class=carousel_photo [src]=info.Bin> </div> </ons-modal>'},190:function(t,e){t.exports='<ons-page> <ons-toolbar> <div class=center>写真アップロード画面2</div> </ons-toolbar> <div class=content> <div style=vertical-align:-webkit-baseline-middle> <p><i class=material-icons>home</i>{{pictAddress}}</p> </div> <ons-list> <ons-list-header>いつの写真？</ons-list-header> <ons-list-item> <ons-input placeholder="" [(value)]=pictTitle></ons-input> </ons-list-item> <ons-list-header>写真のタイトルは？</ons-list-header> <ons-list-item> <ons-input placeholder="" [(value)]=pictTitle></ons-input> </ons-list-item> <ons-list-header>コメントをどうぞ</ons-list-header> <ons-list-item> <ons-input placeholder="" [(value)]=pictComment></ons-input> </ons-list-item> </ons-list> <input id=photoUpload type=file style=display:none (change)=changePhoto($event)> <button class=center onclick=\'document.getElementById("photoUpload").click()\'> <i class=material-icons>insert_photo</i> </button> </div> </ons-page> '},191:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,s)}c((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),c=n(111),l=n(109),u=function(){function t(t){this.indexedDbService=t,this.initialPage=c.Menu}var e;return t.prototype.ngOnInit=function(){return a(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return[4,this.CheckInitData()];case 1:return t=e.sent(),console.log(t),t&&(console.log("データ初期化するよ"),this.indexedDbService.addMultipleLocationInfo([{LocationID:"1",Address:"北海道 室蘭市 常盤町１丁目",Latitude:42.31841,Longitude:140.9701178},{LocationID:"2",Address:"北海道 室蘭市 祝津町３丁目",Latitude:42.339825,Longitude:140.943745},{LocationID:"3",Address:"北海道 室蘭市 茶津町",Latitude:42.319695,Longitude:140.986877},{LocationID:"4",Address:"北海道 室蘭市 道道699号線",Latitude:42.31891,Longitude:140.97256}]),this.indexedDbService.cheakedInitData()),[2]}})})},t.prototype.CheckInitData=function(){return a(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this.indexedDbService.cheakInitData()];case 1:return[2,t.sent()]}})})},t=o([s.Component({selector:"app",template:n(184),styles:["./app.css"]}),i("design:paramtypes",["function"==typeof(e=void 0!==l.IndexedDbService&&l.IndexedDbService)&&e||Object])],t)}();e.MyApp=u},199:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(e,"__esModule",{value:!0}),n(198),n(196);var i=n(0),a=n(29),r=n(18),s=n(142),c=n(152),l=n(66),u=n(150),d=n(191),p=n(111),f=n(146),h=n(145),g=n(79),m=n(110),v=n(109),b={databaseName:"TimeTripPhotoGallery",schema:{CheakInitData:"++ID",TrnPhotoInfo:"++PhotoID,Year,LocationID,Title,Comment,Bin,LastUpdateDateTime",MstLocationInfo:"++LocationID,Address,Latitude,Longitude"}},y=n(144);i.enableProdMode();var L=function(){function t(){}return t=o([i.NgModule({imports:[y.AgmCoreModule.forRoot({apiKey:"AIzaSyCju8LIyDfOiDbk53jDrNnW1ifs7F-4tEU"}),l.OnsenModule,c.HttpModule,a.CommonModule,r.FormsModule,u.DexieModule.forRoot(b)],declarations:[d.MyApp,p.Menu,f.Map,h.RegistrationList,g.Upload,m.TimeTrip],entryComponents:[p.Menu,f.Map,h.RegistrationList,g.Upload,m.TimeTrip],bootstrap:[d.MyApp],providers:[v.IndexedDbService],schemas:[i.CUSTOM_ELEMENTS_SCHEMA]})],t)}();s.platformBrowserDynamic().bootstrapModule(L).catch(function(t){return console.error(t)})},389:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(388),n(200)},390:function(t,e,n){n(389),n(199),t.exports=n(183)},79:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(19),s=function(){function t(){this.pictLocationID="",this.pictAddress="府中市府中町京王ビル",this.pictYear=0,this.pictTitle="",this.pictComment=""}return t.prototype.changePhoto=function(t){this.fileControl(t.target.files)},t.prototype.fileControl=function(t){for(var e=0,n=t;e<n.length;e++){var o=n[e];r.notification.toast(o.name,{timeout:1e3})}},t=o([a.Component({selector:"upload",template:n(190),styles:["./upload.css"]}),i("design:paramtypes",[])],t)}();e.Upload=s}},[[390,0,1]]]);