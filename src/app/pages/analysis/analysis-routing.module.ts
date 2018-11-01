import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDeltaComponent } from './stock-delta/stock-delta.component';
import { StockQueryComponent } from './stock-query/stock-query.component';
import { IndexQueryComponent } from './index-query/index-query.component';
import { StockPopularComponent } from './stock-popular/stock-popular.component';
import { AnalysisComponent } from './analysis.component';
import { AllstockComponent } from './allstock/allstock.component';
import { AllindexComponent } from './allindex/allindex.component';

const routes: Routes = [{
  path: '',
  component: AnalysisComponent,
  children: [{
    path: 'allstock',
    component: AllstockComponent,
  },{
    path: 'allindex',
    component: AllindexComponent,
  },{
    path: 'stockquery/:code',
    component: StockQueryComponent,
  },{
    path: 'stockquery',
    component: StockQueryComponent,
  },{
    path: 'indexquery/:code',
    component: IndexQueryComponent,
  },{
    path: 'indexquery',
    component: IndexQueryComponent,
  },{
    path: 'stockdelta',
    component: StockDeltaComponent,
  },{
    path: 'stockpopular',
    component: StockPopularComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AnalysisRoutingModule { }

export const routedComponents = [
  AnalysisComponent,
  AllstockComponent,
  StockQueryComponent,
  StockDeltaComponent,
  StockPopularComponent,
  IndexQueryComponent,
  AllindexComponent,
];
