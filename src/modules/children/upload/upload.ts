import {Component} from '@angular/core';
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
  constructor() {}
  
  pictLocationID: string = '';
  pictAddress: string = '';
  pictYear: number = 0;
  pictTitle: string = '';
  pictComment: string = '';

  async ngOnInit() {

    let nowDate = new Date();

    // 初期値設定
    this.pictYear = nowDate.getFullYear();
    this.pictAddress = "";

  }

  public changePhoto(event)
  {
    var outFrame = document.getElementById("previewArea");

    var imgTag = "";
    let files: File[] = event.target.files;
    let file: File = files[0];

    var fileReader = new FileReader();
    
    // fileReader.onload = function() {

    //   imgTag += "<img src=\"" + this.result + "\" ";
    //   imgTag += "width=\"300\" ";
    //   imgTag += "height=\"auto\" ";
    //   imgTag += "/>"

    //   outFrame.innerHTML = imgTag;
    // }

    // fileReader.readAsDataURL(file);

    fileReader.onload = function() {

      var binStr = fileReader.result;
      var b64 = btoa(binStr);

      imgTag += "<img src=\"data:image/png;base64," + b64 + "\" ";
      imgTag += "width=\"300\" ";
      imgTag += "height=\"auto\" ";
      imgTag += "/>"

      outFrame.innerHTML = imgTag;


      console.log(fileReader.result);
      console.log(b64);

    }

    fileReader.readAsBinaryString(file)


    this.pictComment = imgTag;
    this.pictTitle = file.name;


  }




}
