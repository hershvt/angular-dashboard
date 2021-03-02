import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.css']
})
export class BarHorizontalComponent implements OnInit {

  @ViewChild("barchart", { static: true }) barchart: ChartComponent;
  @Input()
  data: Object[];

  //color 
  palette: string[];


  constructor(private productService: ProductService,
    private route: Router) { }
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category'
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {

    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };
  public tooltip: Object = {
    enable: true
  };

  // custom code end
  public title: string = 'Product Statistics: Bar Chart';
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  ngOnInit(): void {
    this.barchart.height = '70%';
    this.barchart.width = '70%';

    this.palette = ['#FFDE79'];
    this.barchart.pointClick.subscribe(
      data => {
        this.productService.setCategory(data.point.x);
        this.route.navigateByUrl('/product/', data.point.x);
      }
    );
  }


}
