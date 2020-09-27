import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DonutComponent } from './donut/donut.component';
import { BarVerticalComponent } from './bar-vertical/bar-vertical.component';
import { BarHorizontalComponent } from './bar-horizontal/bar-horizontal.component';
import { ChartModule, PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService, AccumulationAnnotationService, AccumulationChartModule, ChartAllModule, CategoryService, TooltipService, DataLabelService, LineSeriesService, StackingColumnSeriesService, StackingBarSeriesService, StackingLineSeriesService, BarSeriesService, FunnelSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [HomeComponent, DonutComponent, BarVerticalComponent, BarHorizontalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AccumulationChartModule,
    ChartModule,
    ChartAllModule
  ],
  providers: [
    PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
    AccumulationAnnotationService, LegendService, TooltipService, CategoryService, DataLabelService, LineSeriesService,
    StackingColumnSeriesService, StackingBarSeriesService, StackingLineSeriesService,
    BarSeriesService, FunnelSeriesService
  ]
})
export class DashboardModule { }
