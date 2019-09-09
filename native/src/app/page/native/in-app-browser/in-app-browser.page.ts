import { Component, OnInit } from '@angular/core';
import { InAppBrowserService } from '../../../native/in-app-browser.service';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {
  url:string
  test:string

  constructor(private iab:InAppBrowserService) { 
    this.test = '测试'
    this.url = 'https://ionicframework.com/'
  }

  ngOnInit() {
  }

  openUrl(){
    this.iab.open(this.url)
  }

}
