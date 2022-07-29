import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(`params`, params);
    });
    this.route.queryParams.subscribe((query) => {
      console.log(`query params`, query);
    });
  }

  ngOnInit(): void {}
}
