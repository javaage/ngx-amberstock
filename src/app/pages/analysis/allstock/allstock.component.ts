import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {ActivatedRoute,Params} from '@angular/router';
import { StockService } from '../../../@core/data/stock.service';
import { ConstService } from '../../../@core/data/const.service';

@Component({
  selector: 'ngx-allstock',
  templateUrl: './allstock.component.html',
  styleUrls: ['./allstock.component.scss']
})
export class AllstockComponent {
  categories = [];
  indexCode = "";
  stocks = [];
  stocksInIndex = [];
  codesInIndex = [];

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    editable: false,
    columns: {
      code: {
        title: '代码',
        type: 'html',
        valuePrepareFunction: function(cell,row){
            var code = cell;
            return `<a href='/#/pages/analysis/stockquery/${code}' >${code}</a>`;
            // return `<a href="" routerLink='./stockquery' [queryParams]="{'code':'${code}'}" >${code}</a>`; 
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
      },ttm: {
        title: 'ttm',
        type: 'number',
      },pb: {
        title: 'pb',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: StockService,
    private constService : ConstService,
    private route: ActivatedRoute) {

    this.categories = constService.categories;
    this.service.getStockDeltaCode().subscribe(stocks=>{
      this.stocks = stocks;
      this.source.load(this.stocks);

      this.route.params.subscribe((params:Params) => {
        if(params['code']){
          this.indexCode = params['code'];
          this.changeIndex(this.indexCode);
        }
      });


      
        // var temps = [];
        // var i = 0;
        // var timer = setInterval(function(_t){
        //   var category = _t.categories[i];
        //   _t.service.getIndexWeight(category.code).subscribe(codesInIndex=>{
        //     console.log(`${category.code}     ${codesInIndex.length}`);

        //     codesInIndex = codesInIndex.map(value=>{
        //       return value[0];
        //     })
        //     var stocksFilter = _t.stocks.filter(stock=>{
        //       if(codesInIndex.includes(stock.code)) 
        //         return true;
        //     })
        //     console.log(`${category.code}     ${stocksFilter.length}`);
        //     if(stocksFilter.length<100 && stocksFilter.length>0)
        //       temps.push({'code':category.code,'name':category.name});
        //   });
        //   i++;
        //   if(i>=_t.categories.length){
        //     console.log(temps);
        //     clearInterval(timer);
        //   }
        // },1000,this);

    });
  }

  changeCategory(){
    this.changeIndex(this.indexCode);
  }

  changeIndex(indexCode){
    if(indexCode){
      this.service.getIndexWeight(indexCode).subscribe(codesInIndex=>{
        this.codesInIndex = codesInIndex;
        this.codesInIndex = this.codesInIndex.map(value=>{
          return value[0];
        })
        this.stocksInIndex = this.stocks.filter(stock=>{
          if(this.codesInIndex.includes(stock.code)) 
            return true;
        })
        this.source.load(this.stocksInIndex);
      });
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

