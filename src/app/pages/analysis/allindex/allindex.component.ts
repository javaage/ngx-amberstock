import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { StockService } from '../../../@core/data/stock.service';
import { ConstService } from '../../../@core/data/const.service';

@Component({
  selector: 'ngx-allindex',
  templateUrl: './allindex.component.html',
  styleUrls: ['./allindex.component.scss']
})
export class AllindexComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    editable: false,
    columns: {
      code: {
        title: '操作',
        type: 'html',
        valuePrepareFunction: function(cell,row){
            var code = cell;
            return `<a href='/#/pages/analysis/indexquery/${code}' >指数查询</a>
            <span>&nbsp;&nbsp;</span>
            <a href='/#/pages/analysis/allstock/${code}' >个股分析</a>
            `;
        }
      },
      name: {
        title: '名称',
        type: 'string',
      },min: {
        title: '人气最低',
        type: 'number',
      },max: {
        title: '人气最高',
        type: 'number',
      },ac: {
        title: '连续上升',
        type: 'number',
      },duration: {
        title: '反转强度',
        type: 'number',
      },arrow: {
        title: '波形',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: StockService,
    private constService: ConstService) {
      var categories = constService.categories.map(item=>{
        return item.code;
      });

    this.service.getIndexDeltaCode().subscribe((result:any[])=>{
      console.log(result);
      result = result.filter(item=>{
        return categories.includes(item.code);
      });
      this.source.load(result);
    });
  }

}


