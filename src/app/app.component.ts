import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ProductService } from './product/product.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { data } from './datasource'
import { map, distinct, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Donut } from './dashboard/donut.model';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  category = [];
  donutData = [];
  data$ = from(data);

  userStatus: boolean;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    , private productService: ProductService, private auth: AuthService,
    private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.data$.pipe(
      map(a => a.category),
      distinct(),
      tap(p => this.category.push(p)),
    ).subscribe();

    this.userStatus = false;
  }

  ngOnInit(): void {
    this.category.forEach(c => {
      let count = data.filter(e => e.category === c).length;
      let obj = {
        'product': '',
        'value': 0,
        'text': ''
      };
      obj.product = c;
      obj.value = count;
      obj.text = '' + count;
      this.donutData.push(obj);
    });
    this.productService.setDonutData(this.donutData);

    this.auth.loginStatus.subscribe(data => {
      this.userStatus = data;
    });
  }
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onProductClick(p) {
    this.productService.setCategory(p);
  }

  onLogout() {
    this.auth.loginStatus.next(false);
    this.route.navigate(['login']);
  }
}
