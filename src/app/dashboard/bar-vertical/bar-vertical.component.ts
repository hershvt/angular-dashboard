import { Component, OnInit, ViewChild } from '@angular/core';
import { ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'dashboard-bar-vertical',
  templateUrl: './bar-vertical.component.html',
  styleUrls: ['./bar-vertical.component.css']
})
export class BarVerticalComponent implements OnInit {

  @ViewChild("chart", { static: true }) chart: ChartComponent;

  public accepted: Object[] = [
    { index: 0, company: 'Other', amount: 6000 },
    { index: 1, company: 'KFW', amount: 3500 },
    { index: 2, company: 'UCB', amount: 2780 },
    { index: 3, company: 'Bayer', amount: 4500 }
  ];
  public rejected: Object[] = [
    { index: 0, company: 'Other', amount: 2400 },
    { index: 1, company: 'KFW', amount: 1300 },
    { index: 2, company: 'UCB', amount: 1880 },
    { index: 3, company: 'Bayer', amount: 1600 }

  ];

  palette: string[];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    labelFormat: '${value}',
    edgeLabelPlacement: 'Shift'
  };
  public tooltip: Object = {
    enable: true
  };

  //Initializing Marker
  public marker: Object = {
    dataLabel: {
      visible: true,
      position: 'Top',
      font: {
        fontWeight: '600', color: '#ffffff'
      }
    }
  }


  // custom code start
  public load(args: ILoadedEventArgs): void {
  };
  // custom code end
  public title: string = 'Payment Conversion Rate';
  public chartArea: Object = {
    border: {
      width: 0
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.chart.theme = 'Bootstrap4';
    this.chart.height = '60%';
    this.chart.pointClick.subscribe(
      data => {
        let point = data.pointIndex;
        let series = data.seriesIndex;
        console.log(point + ' ' + series);
      }
    );

    this.palette = ['#92E2A0', '#E9679B'];
  }


}
