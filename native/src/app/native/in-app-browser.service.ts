import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class InAppBrowserService {

  constructor(private iab: InAppBrowser) { }

  open(url){
    let options = 'toolbarcolor=#007fff,closebuttoncolor=#ffffff,lefttoright=yes,hideurlbar=yes,hidenavigationbuttons=yes'
    const browser = this.iab.create(url,'_blank',options);
  }
}
