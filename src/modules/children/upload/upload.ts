import { Component, ViewChild } from '@angular/core';
import { IndexedDbService } from '../../../services/IndexedDbService';
import { OnsNavigator, Params } from 'ngx-onsenui';


import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[upload]',
  template: require('./upload.html'),
  styles: [`

  .footer {
    margin-top: 10px;
    width: 100%;
  }

  .footer #


  `]
})
export class Upload {
 
  photoLocationID: string = '';
  photoAddress: string = '';
  photoYear: number = 0;
  photoComment: string = '';

  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {}

  async ngOnInit() {

    // パラメタ取得
    this.photoLocationID = this._params.data.LocationID;
    this.photoAddress = this._params.data.Address;
    this.photoYear = this._params.data.Year;

  }

  //#region 公開処理

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
      var imgElem = document.getElementById('photoPreview');

      imgElem.src = "data:image/png;base64," + b64;

    }

    fileReader.readAsBinaryString(file)

  }

  // 写真アップロード
  public uploadPhotoConfirm()
  {

    if (this.errorCheck() == false)
    {
      return;
    }

    ons.notification.confirm({
      title: "確認",
      message: "写真をアップロードしますか？",
      cancelable: true,
      callback: i => {
        if (i == 1) {
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
    var photoInfo: TimeTripPhotoInfo = null;
    photoInfo = new TimeTripPhotoInfo()
    photoInfo.Year = this.photoYear;
    photoInfo.LocationID = this.photoLocationID;
    photoInfo.Comment = this.photoComment;
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

private errorCheck()
{
  var imgElem = document.getElementById('photoPreview');
  if (imgElem.src == "")
  {
    ons.notification.alert({title: 'エラー', message: 'アップロードする写真を選択してください。'})
    return false;
  }

  if (this.photoYear == null)
  {
    ons.notification.alert({title: 'エラー', message: '年を入力してください。'})
    return false;
  };

  return true;
}

//#endregion

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

class YearInfo {
  YearDisp: string;
  Year: number;
}