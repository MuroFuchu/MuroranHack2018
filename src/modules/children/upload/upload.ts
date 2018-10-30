import { Component,ViewChild } from '@angular/core';
import { IndexedDbService } from '../../../services/IndexedDbService';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { TimeTrip } from '../timeTrip/timeTrip';
import { Menu } from '../menu/menu';

import * as ons from 'onsenui';

@Component({
  selector: "ons-page[title='upload']",
  template: require('./upload.html'),
  styles: [`

  .footer {
    margin-top: 10px;
    width: 100%;
    display:inline-block;
  }

  .btn {
    color: black;
    background-color: transparent;
    box-shadow: none;
    height: 35px;
    width: 35px;
    padding: 0px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }

  .btn i {
    font-size: 32px;
  }

  `]
})
export class Upload {
  @ViewChild('openPhoto') openPhoto;

  photoLocationID: string = '';
  photoAddress: string = '';
  photoYear: number = 0;
  photoComment: string = '';
  photoID: number = 0;

  inputAccept: string = '';

  constructor(private _navigator: OnsNavigator, private _indexedDbService: IndexedDbService, private _params: Params) {}

  async ngOnInit() {

    // パラメタ取得
    this.photoLocationID = this._params.data.LocationID;
    this.photoAddress = this._params.data.Address;

    // Element情報設定
    this.inputAccept = "image/*";

  }

  //#region 公開処理

  public openFileDialog() {
    console.log(this.openPhoto);
    this.openPhoto.nativeElement.click();
  }

  // ファイル選択ボタン
  public changePhoto(event)
  {
    let files: File[] = event.target.files;
    let file: File = files[0];

    var fileReader = new FileReader();
    fileReader.onload = function() {

      var imgElem: HTMLImageElement = document.getElementById('photoPreview') as HTMLImageElement;
      var b64 = btoa(fileReader.result.toString());
      imgElem.src = "data:image/jpeg;base64," + b64;

    }

    fileReader.readAsBinaryString(file);

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
          this.pageChange();
        }
      }
    });
  }

  // ホームへ戻る
  public goToHome(){
    this._navigator.nativeElement.resetToPage(Menu);
  }

//#endregion

//#region 非公開処理

  // 写真情報DB登録処理
  private async uploadPhoto()
  {
    try{
      var imgElem: HTMLImageElement = document.getElementById('photoPreview') as HTMLImageElement;
      var photoInfo: TimeTripPhotoInfo = null;

      photoInfo = new TimeTripPhotoInfo()
      photoInfo.Year = this.photoYear;
      photoInfo.LocationID = this.photoLocationID;
      photoInfo.Comment = this.photoComment;
      photoInfo.Bin = imgElem.src;

      var result = await this._indexedDbService.addOnePhotoInfo(photoInfo);
      this.photoID = Number(result);

      ons.notification.alert({
        title: 'ありがとう！',
        message: '素敵な写真ですね！',
      });
  
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // アップロード後の画面遷移
  private pageChange() {
    var p = this._navigator.nativeElement.pages.filter((page) => { return page.title == 'timetrip'; });
    if(p.length > 0) {
      this._navigator.nativeElement.popPage();
    } else {
      // TimeTripページ経由であれば、TimeTripページに戻る
      this._navigator.nativeElement.replacePage(TimeTrip, {data: { LocationID: this.photoLocationID, PhotoID: this.photoID}});
    }
  }

  // エラーチェック
  private errorCheck()
  {
    var imgElem: HTMLImageElement = document.getElementById('photoPreview') as HTMLImageElement;
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
