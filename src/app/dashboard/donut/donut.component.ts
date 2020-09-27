import { Component, OnInit, ViewChild } from '@angular/core';
import { IAccLoadedEventArgs, AccumulationTheme, DataLabel, DataLabelSettings } from '@syncfusion/ej2-charts';
import { AccumulationChartComponent } from '@syncfusion/ej2-angular-charts';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @ViewChild("accumulationChart", { static: true }) accumulationChart: AccumulationChartComponent;

  public tooltipSettings: Object;

  public data: Object[] = [
    { index: 0, product: 'Laptop', value: 12, text: '12' },
    { index: 1, product: 'Desktop Computer', value: 4, text: '4' },
    { index: 2, product: 'Tablet', value: 5, text: '5' },
    { index: 3, product: 'Pen Drive', value: 3, text: '3' }
  ];

  palette: string[]; //color

  //Initializing Legend
  public legendSettings: Object = {
    visible: true,
  };
  //Initializing DataLabel
  public dataLabel: Object = {
    visible: true,
    name: 'text',
    position: 'Inside',
    font: {
      size: '18px',
      fontWeight: '1600',
      color: '#94405D'
    },
    template: '<div>${point.y}</div>'
  };


  // custom code end
  public tooltip: Object = { enable: true };
  public title: string = 'Product Stats';
  constructor(private productService: ProductService,
    private route: Router) { }

  ngOnInit(): void {

    this.accumulationChart.title = "Product Stats";
    this.tooltipSettings = {
      enable: true,
      format: '${point.x}:<b>${point.y}</b>'
    }
    this.accumulationChart.tooltip.header = 'Product Info';
    this.accumulationChart.width = '80%';
    this.accumulationChart.height = '70%';

    this.accumulationChart.margin.left = 0;
    this.accumulationChart.pointClick.subscribe(
      data => {
        this.productService.setCategory(data.point.x);
        this.route.navigateByUrl('/product/', data.point.x);
      }
    );

    this.palette = ['#E599F7', '#E9679B', '#80B5FE', '#FFDE79', '#91E19F'];
  }



}
