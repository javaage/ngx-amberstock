import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { StockService } from '../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stock-delta',
  templateUrl: './stock-delta.component.html',
  styleUrls: ['./stock-delta.component.scss']
})
export class StockDeltaComponent implements AfterViewInit, OnDestroy {
  _stock: any;
  get stock(): any {
    return this._stock;
  }

  @Input('stock')
  set stock(stock: any) {
    this._stock = stock;
    if (stock.code)
      this.showDelta();
  }

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    private stockService: StockService) {
  }

  ngAfterViewInit() {

  }

  showDelta() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.stockService.getStockDelta(this.stock.code).subscribe(result => {
        this.options = {
          backgroundColor: echarts.bg,
          color: [echarts.textColor, colors.danger, colors.primary],
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
            dimensions: ['日期', '深成指', '趋势', this.stock.name],
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
            splitLine: {

              interval: function (index, value) {

                return true;
              },
              lineStyle: {
                color: ['#222']
              }
            }
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
              type: 'line'
            },
            { type: 'line' },
            {
              type: 'line',
              yAxisIndex: 1,
            }
          ]
        };
      });
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscription)
      this.themeSubscription.unsubscribe();
  }
}



