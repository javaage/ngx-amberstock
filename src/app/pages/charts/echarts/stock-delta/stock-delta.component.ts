import { Component, OnInit, AfterViewInit,  OnDestroy} from '@angular/core';
import { StockService } from '../../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stock-delta',
  templateUrl: './stock-delta.component.html',
  styleUrls: ['./stock-delta.component.scss']
})
export class StockDeltaComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  codes = [];
  index = 0;
  code = '000001.SZ';
  constructor(private theme: NbThemeService,
    private stockService: StockService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.showDelta(this.code);
      
    });

    this.stockService.getStockDeltaCode().subscribe(result=>{
      this.codes = result;
    });
  }

  showDelta(code){
    this.stockService.getStockDelta(code).subscribe(result=>{
      this.options = {
        legend: {},
        tooltip: {},
        dataset: {
            dimensions: ['date', 'base index', 'delta', 'stock index'],
            // 提供一份数据。
            source: result.reverse()
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {type: 'category'},
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            {type: 'line'},
            {type: 'line'},
            {type: 'line'}
        ]
      };
    });
  }

  prev(){
    if(this.codes.length>0){
      this.index = --this.index%this.codes.length;
      this.index = this.index>=0? this.index: this.index+this.codes.length;
      this.code = this.codes[this.index];
      this.showDelta(this.code);
      console.log(this.index);
    }
  }

  next(){
    
    if(this.codes.length>0){
      this.index = ++this.index%this.codes.length;
      this.code = this.codes[this.index];
      this.showDelta(this.code);
      console.log(this.index);
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}



