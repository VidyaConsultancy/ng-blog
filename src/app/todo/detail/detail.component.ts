import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      console.log(`params`, params);
    });
    this.route.queryParams.subscribe((query) => {
      console.log(`query params`, query);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
