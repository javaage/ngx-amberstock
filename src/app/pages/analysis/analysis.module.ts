import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllstockComponent } from './allstock/allstock.component';
import { StockDeltaComponent } from './stock-delta/stock-delta.component';
import { StockQueryComponent } from './stock-query/stock-query.component';
import { StockPopularComponent } from './stock-popular/stock-popular.component';
import { AnalysisComponent } from './analysis.component';
import { AnalysisRoutingModule, routedComponents } from './analysis-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StockService } from '../../@core/data/stock.service';
import { IndexQueryComponent } from './index-query/index-query.component';
import { IndexDeltaComponent } from './index-delta/index-delta.component';
import { AllindexComponent } from './allindex/allindex.component';

@NgModule({
  imports: [CommonModule, ThemeModule, AnalysisRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule, Ng2SmartTableModule,],
  declarations: [...routedComponents,  AllstockComponent,AnalysisComponent,StockDeltaComponent,StockQueryComponent,StockPopularComponent, IndexQueryComponent, IndexDeltaComponent, AllindexComponent,],
  providers: [
    StockService,
  ],
})
export class AnalysisModule { }