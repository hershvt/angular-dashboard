import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ProductService } from './product/product.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { data } from './datasource'
import { map, distinct, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  category = [];

  data$ = from(data);
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    , private productService: ProductService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.data$.pipe(
      map(a => a.category),
      distinct(),
      tap(p => this.category.push(p)),
    ).subscribe();
  }

  ngOnInit(): void { }
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onProductClick(p) {
    this.productService.setCategory(p);
  }
}
