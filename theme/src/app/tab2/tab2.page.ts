import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items = [
    {title: '标题1', color: '#ffed5d'},
    {title: '标题2', color: '#6876ff'},
    {title: '标题4', color: '#ff3837'},
  ];
  constructor( private sanitizer: DomSanitizer) {}

  // 动态设置item的颜色
  getDynamicColor(color) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar:${color}`);
  }
}
