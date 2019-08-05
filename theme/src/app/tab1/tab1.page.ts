import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private theme:ThemeService) {}

  enableDark(){
    this.theme.enableDark();
  }

  enableLight(){
    this.theme.enableLight();
  }

}
