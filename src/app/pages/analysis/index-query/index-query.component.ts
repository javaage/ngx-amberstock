import { Component, OnInit, AfterViewInit,  OnDestroy} from '@angular/core';
import { StockService } from '../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'ngx-index-query',
  templateUrl: './index-query.component.html',
  styleUrls: ['./index-query.component.scss']
})
export class IndexQueryComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  allStocks = [];
  stocks = [];
  index = 0;
  code:string='';
  stock: any = {};

  constructor(private theme: NbThemeService,
    private stockService: StockService,
    private route: ActivatedRoute) {

      
  }

  ngAfterViewInit() {
    this.route.params.subscribe((params:Params) => {
      var code = params['code'];

      this.stockService.getIndexDeltaCode().subscribe(result=>{
        this.allStocks = result;
        if(this.allStocks.length>0){
          this.stocks = this.stocks = this.allStocks.filter(v=>{
            return true;
          });
          if(code){
            if(this.stocks.length>0){
              var index = this.stocks.findIndex(item=>{
                if(item.code == code){
                  return true;
                }
              });
              if(index>=0){
                this.index = index;
                this.stock = this.stocks[this.index];
                this.code=this.stock.code;
              }else{
                this.index = 0;
                this.code = code;
              }
            }else{
              this.code = code;
            }
          }else{
            if(this.stocks.length>0){
              this.stock = this.stocks[0];
              this.code=this.stock.code;
            }
          }
          
        }
      });

    });

    
    
  }

  searchCodes($event,myDrop,code){
    // $event.stopPropagation(); 

    this.stocks = this.allStocks.filter(v=>{
      return v.code.includes(code) || v.name.includes(code);
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
  }
}