import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.page.html',
  styleUrls: ['./router.page.scss'],
})
export class RouterPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
