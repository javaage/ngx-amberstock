import { Component, OnInit, AfterViewInit,  OnDestroy} from '@angular/core';
import { StockService } from '../../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stock-query',
  templateUrl: './stock-query.component.html',
  styleUrls: ['./stock-query.component.scss']
})
export class StockQueryComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  allStocks = [];
  stocks = [];
  index = 0;
  code:string='';
  stock: any = {};

  constructor(private theme: NbThemeService,
    private stockService: StockService) {
      this.stockService.getStockDeltaCode().subscribe(result=>{
        this.allStocks = result;
        if(this.allStocks.length>0){
          this.stocks = this.stocks = this.allStocks.filter(v=>{
            return true;
          });
          if(this.stocks.length>0){
            this.stock = this.stocks[0];
            this.code=this.stock.code;
          }
            
        }
        
      });
  }

  ngAfterViewInit() {
    
  }

  searchCodes($event,myDrop,code){
    // $event.stopPropagation(); 

    this.stocks = this.allStocks.filter(v=>{
      return v.code.includes(code) || v.name.includes(code) || v.py.includes(code.toUpperCase());
    });
    // if(this.stocks.length>0){
    //   this.stock = this.stocks[0];
    //   this.code=this.stock.code;
    // }
            
    myDrop.open();
  }

  selectCode(item){
    this.stock = item;
    this.code=this.stock.code;
  }

  first(){
    if(this.allStocks.length>0){
      this.index = 0;
      this.stock = this.allStocks[this.index];
      this.code=this.stock.code;
      console.log(this.index);
    }
  }

  last(){
    if(this.allStocks.length>0){
      this.index = this.allStocks.length-1;
      this.stock = this.allStocks[this.index];
      this.code=this.stock.code;
      console.log(this.index);
    }
  }

  prev(){
    if(this.allStocks.length>0){
      this.index = --this.index%this.allStocks.length;
      this.index = this.index>=0? this.index: this.index+this.allStocks.length;
      this.stock = this.allStocks[this.index];
      this.code=this.stock.code;
      console.log(this.index);
    }
  }

  next(){
    if(this.allStocks.length>0){
      this.index = ++this.index%this.allStocks.length;
      this.stock = this.allStocks[this.index];
      this.code=this.stock.code;
      console.log(this.index);
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}



