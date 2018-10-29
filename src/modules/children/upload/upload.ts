import { Component } from '@angular/core';
import { IndexedDbService } from '../../../services/IndexedDbService';
import { OnsNavigator, Params } from 'ngx-onsenui';


import * as ons from 'onsenui';

@Component({
  selector: 'upload',
  template: require('./upload.html'),
  styles: [`

  #openBtnArea {
    margin-top:8px;
  }

  #uploadBtnArea {
    margin-top:8px;
  }  

  `]
})
export class Upload {

  addressList: Address[] = [
    { LocationID: "a001", Address: "北海道登別市幌別町３－２０", Latitude: 10, longitude: 10 },
    { LocationID: "a002", Address: "東京都府中市府中町１－９", Latitude: 20, longitude: 10 },  
    { LocationID: "a003", Address: "岩手県宮古市五月町１－１", Latitude: 50, longitude: 10 },
  ];

  addressInfo: Address = null;

  pictLocationID: string = '';
  pictAddress: string = '';
  pictYear: number = 0;
  pictTitle: string = '';
  pictComment: string = '';


  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {}

  async ngOnInit() {

    // パラメタ取得
    this.pictLocationID = this._params.data.LocationID;
    this.pictYear = this._params.data.Year;

    // アドレス情報取得


    // 初期値設定



  }

  //#region 公開処理

  // アドレス変更イベント
  public changeAddress(event)
  {
    this.addressInfo = this.addressList.find(f => f.LocationID == event.target.value);
  }

  // ファイル選択ボタン
  public changePhoto(event)
  {
    var outFrame = document.getElementById("previewArea");

    var imgTag = "";
    let files: File[] = event.target.files;
    let file: File = files[0];

    var fileReader = new FileReader();

    fileReader.onload = function() {

      var binStr = fileReader.result;
      var b64 = btoa(binStr);

      imgTag += "<img id=\"photoPreview\" src=\"data:image/png;base64," + b64 + "\" ";
      imgTag += "width=\"300\" ";
      imgTag += "height=\"auto\" ";
      imgTag += "/>"

      outFrame.innerHTML = imgTag;

    }

    fileReader.readAsBinaryString(file)


    this.pictComment = imgTag;
    this.pictTitle = file.name;


  }

  // 写真アップロード
  public uploadPhotoConfirm()
  {
    ons.notification.confirm({
      title: "確認",
      message: "写真をアップロードしますか？",
      cancelable: true,
      callback: i => {
        if (i != -1) {
          this.uploadPhoto();
        }
      }
    });
  }


//#endregion

//#region 非公開処理


// 写真情報DB登録処理
private uploadPhoto()
{
  try {
    var imgElem = document.getElementById('photoPreview');
    var nowTime = new Date();

    var photoInfo: TimeTripPhotoInfo = null;
    photoInfo = new TimeTripPhotoInfo()
    photoInfo.Year = this.pictYear;
    photoInfo.LocationID = this.pictLocationID;
    photoInfo.Title = this.pictTitle;
    photoInfo.Comment = this.pictComment;
    photoInfo.Bin = imgElem.src;
    photoInfo.LastUpdateDate = this.getLastUpdateDate();
    this._indexedDbService.addOnePhotoInfo(photoInfo);
  } catch (error) {
    console.log(error);
    return;
  }

  ons.notification.alert({
    title: 'ありがとう！',
    message: '素敵な写真ですね！',
  });
  
}
  

private getLastUpdateDate()
{
  var nowTime = new Date();
  return nowTime.getFullYear.toString() + "/" + 
         nowTime.getMonth.toString() + "/" +
         nowTime.getDay.toString();
}

//#endregion

}

class Address {
  LocationID: string;
  Address: string;
  Latitude: number;
  longitude: number;
}

class TimeTripPhotoInfo {
  PhotoID: number;
  Year: number;
  LocationID: string;
  Title: string;
  Comment: string;
  Bin: string;
  LastUpdateDate: string;
}