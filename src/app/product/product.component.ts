import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private actRoute: ActivatedRoute) { }

  onProductAdd(product) {
    this.productService.addProduct(product);
  }

  ngOnInit() {
    //console.log(this.actRoute.snapshot.params.category);
    this.productService.getCategory().subscribe(
      s => console.log(s)
    );
  }

}
