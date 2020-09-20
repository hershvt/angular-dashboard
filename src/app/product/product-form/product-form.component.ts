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
  category: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    category: new FormControl({ value: '', disabled: true }, [Validators.required]),
    serialNo: new FormControl('', [Validators.required]),
    stockCount: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    price: new FormControl('', [Validators.required, Validators.pattern('[0-9.]+')]),
  });

  constructor(public productService: ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(
      s => {
        this.category = s;
        this.productForm.get('category').setValue(this.category);
      }
    );
  }

  onFormSubmit() {
    this.product = this.productForm.value;
    this.product.category = this.category;

    //passing this product object to productService 
    this.productService.addProduct(this.product);

    this._snackBar.open('Product Added to Grid', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
