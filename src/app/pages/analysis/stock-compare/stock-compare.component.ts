import { Component, OnInit } from '@angular/core';
import { ConstService } from '../../../@core/data/const.service';
import { StockService } from '../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-stock-compare',
  templateUrl: './stock-compare.component.html',
  styleUrls: ['./stock-compare.component.scss']
})
export class StockCompareComponent implements OnInit {

  categories = [];
  selectedItems = [];
  dropdownSettings = {};

  options: any = {};
  themeSubscription: any;
  dtStart: Date = new Date(2015,7,1);
 
  onValueChange(value: Date): void {
    this.dtStart = value;
    console.log(this.dtStart);
  }

  constructor(private constService: ConstService,
    private theme: NbThemeService,
    private stockService: StockService,
    private datePipe: DatePipe) {
      this.stockService.getStockDeltaCode().subscribe(stocks=>{
        this.categories = stocks;
      });
  }

  ngOnInit() {

    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'code',
      textField: 'name',
      selectAllText: '全选',
      unSelectAllText: '清空',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
  compaireIndex(){
    var indexs = this.selectedItems.slice(0,30).map(item=>{
      return item.code;
    }).join(',');
    this.showDelta(indexs);
  }

  showDelta(indexs) {
    var names = this.selectedItems.slice(0,30).map(item=>{
      return item.name;
    });
    
    var series = this.selectedItems.slice(0,30).map(item=>{
      return { type: 'line' };
    });

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.stockService.stockCompare (indexs,this.datePipe.transform(this.dtStart, 'yyyyMMdd')).subscribe(result => {
        this.options = {
          backgroundColor: echarts.bg,
          color: [echarts.textColor, colors.danger, colors.primary,colors.info,'#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
          legend: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#505765'
              }
            }
          },
          grid: {
            left: '50px',   //距离左边的距离
            right: '50px', //距离右边的距离
            bottom: '50px',//距离下边的距离
            top: '50px' //距离上边的距离
          },
          dataset: {
            dimensions: ['日期', '深成指', ...names],
            // 提供一份数据。
            source: result.reverse()
          },
          // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          // 声明一个 Y 轴，数值轴。
          yAxis: [{
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          }, {
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            splitLine: {
              show: false
            }
          }],
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 100,
              minValueSpan: 0
            },
            {
              show: true,
              type: 'slider',
              bottom: 0,
              start: 0,
              end: 100,
              minValueSpan: 0
            }
          ],
          series: [
            {
              type: 'line',
              yAxisIndex: 1,
            },
            ...series
          ]
        };
      });
    });
  }
}