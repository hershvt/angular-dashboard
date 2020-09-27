import { Component, OnInit, ViewChild } from '@angular/core';
import { IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-charts';
import { AccumulationChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'dashboard-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @ViewChild("accumulationChart", { static: true }) accumulationChart: AccumulationChartComponent;

  public tooltipSettings: Object;

  public data: Object[] = [
    { index: 0, bank: 'BayernLB', value: 20, text: '20%' },
    { index: 1, bank: 'DZ Bank', value: 25, text: '25%' },
    { index: 2, bank: 'UniCredit', value: 25, text: '25%' },
    { index: 3, bank: 'Sparkasse Bank', value: 20, text: '20%' },
    { index: 4, bank: 'Others', value: 30, text: '30%' }
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
      fontWeight: '1600',
      color: '#94405D'
    },
    template: '<div>${point.y}</div>'
  };


  // custom code end
  public tooltip: Object = { enable: true };
  public title: string = 'Product Stats';
  constructor() { }

  ngOnInit(): void {

    this.accumulationChart.title = "Product Stats";
    this.tooltipSettings = {
      enable: true,
      format: '${point.x}:<b>${point.y}</b>'
    }
    this.accumulationChart.tooltip.header = 'Product Info';
    this.accumulationChart.width = '100%';
    this.accumulationChart.height = '100%';

    this.accumulationChart.margin.left = 0;
    this.accumulationChart.pointClick.subscribe(
      data => {
      }
    )

    this.palette = ['#E599F7', '#E9679B', '#80B5FE', '#FFDE79', '#91E19F'];
  }



}
