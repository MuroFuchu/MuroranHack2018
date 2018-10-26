import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'upload',
  template: require('./upload.html'),
  styles: [
  	'./upload.css'
  ]
})
export class Upload {
  constructor() {}
  
  pictLocationID: string = '';
  pictAddress: string = '府中市府中町京王ビル';
  pictYear: number = 0;
  pictTitle: string = '';
  pictComment: string = '';

  public changePhoto(event)
  {

    var outFrame = document.getElementById("preview");

    var imgTag = "";
    let files: File[] = event.target.files;
    let file: File = files[0];
    //this.fileControl(files);

    var fileReader = new FileReader();

    fileReader.onload = function() {

      imgTag += "<img src=\"" + this.result + "\" />";
      outFrame.innerHTML = imgTag;
    }

    fileReader.readAsDataURL(file);

    this.pictComment = imgTag;
    this.pictTitle = file.name;


  }


  private fileControl(files: File[])
  {
    for (let file of files)
    {
      ons.notification.toast(file.name, { timeout: 1000 } );
    }
  }

}
