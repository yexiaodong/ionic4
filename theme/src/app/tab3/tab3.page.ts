import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  list = [
    {title: '路由', router: '/router/1234'},
    {title: '表单', router: '/form'},
    {title: 'Http', router: ''},
  ]
  constructor() {}
}
