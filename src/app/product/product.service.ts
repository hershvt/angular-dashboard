import { Injectable } from '@angular/core';
import { Product, Donut } from './product.model';
import { data } from '../datasource'
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, distinct, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$ = new BehaviorSubject<Product[]>([]);
  category$ = new BehaviorSubject<string>('');
  donutData: Object[];


  constructor() {
    this.products$.next(data);

  }
  addProduct(product: Product) { //14th
    let products = [];
    //step 1 : fetch all products from subject 
    products = this.products$.value; //13 
    //step 2: add new value to products[] array
    products.push(product); //14
    //step 3: give next value to subject 
    this.products$.next(products); //14
  }
  fetchProducts(): Observable<Product[]> {
    return this.products$;
  }
  setCategory(s: string) {
    this.category$.next(s);
  }

  getCategory() {
    return this.category$;
  }

  setDonutData(donutData: any): any {
    this.donutData = donutData;
  }

  getDonutData() {
    return this.donutData;
  }

}
