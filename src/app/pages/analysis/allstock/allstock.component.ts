import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { StockService } from '../../../@core/data/stock.service';

@Component({
  selector: 'ngx-allstock',
  templateUrl: './allstock.component.html',
  styleUrls: ['./allstock.component.scss']
})
export class AllstockComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    editable: false,
    columns: {
      code: {
        title: 'code',
        type: 'html',
        valuePrepareFunction: function(cell,row){
            var code = cell;
            return `<a href='/#/pages/analysis/stockquery/${code}' >${code}</a>`;
            // return `<a href="" routerLink='./stockquery' [queryParams]="{'code':'${code}'}" >${code}</a>`; 
        }
      },
      name: {
        title: 'name',
        type: 'string',
      },min: {
        title: 'min',
        type: 'number',
      },max: {
        title: 'max',
        type: 'number',
      },ac: {
        title: '连续上升',
        type: 'number',
      },duration: {
        title: '反转强度',
        type: 'number',
      },arrow: {
        title: 'arrow',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: StockService) {
    this.service.getStockDeltaCode().subscribe(result=>{
      console.log(result);
      this.source.load(result);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

