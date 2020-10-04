import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  category: string;

  data: object = [];
  //Mat Table Props
  displayedColumns: string[] = ['serialNo', 'name', 'category', 'stockCount', 'price'];

  dataSource; //defining the datasource 
  ELEMENT_DATA: Product[]; //define ELEMENT DATA

  //Paginator and Sorting selectors 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(
      s => {
        this.category = s;
        this.productService.fetchProducts().subscribe(
          data => {
            //filter data based on category selected.. 
            data = data.filter(e => e.category === this.category);
            this.dataSource = new MatTableDataSource<Product>(data);
            this.dataSource.paginator = this.paginator;
            //add sorting to datasource
            this.dataSource.sort = this.sort;
          }
        );
      }
    );

    this.productService.fetchProducts().subscribe(
      data => {
        //filter data based on category selected.. 
        data = data.filter(e => e.category === this.category);
        this.dataSource = new MatTableDataSource<Product>(data);
        this.dataSource.paginator = this.paginator;
        //add sorting to datasource
        this.dataSource.sort = this.sort;
      }
    );

  }

}




