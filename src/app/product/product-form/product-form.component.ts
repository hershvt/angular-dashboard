import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    category: new FormControl('', [Validators.required]),
    serialNo: new FormControl('', [Validators.required]),
    stockCount: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  constructor(public productService: ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.product = this.productForm.value;
    //passing this product object to productService 
    this.productService.addProduct(this.product);

    this._snackBar.open('Product Added to Grid', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
