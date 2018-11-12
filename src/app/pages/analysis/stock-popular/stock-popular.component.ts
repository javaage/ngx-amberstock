import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { StockService } from '../../../@core/data/stock.service'
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stock-popular',
  templateUrl: './stock-popular.component.html',
  styleUrls: ['./stock-popular.component.scss']
})
export class StockPopularComponent implements AfterViewInit {
  _stock: any;
  get stock(): any {
    return this._stock;
  }

  @Input('stock')
  set stock(stock: any) {
    console.log(stock);
    this._stock = stock;
    if (stock) {
      if (this.loop) {
        this.t = 0;
        clearInterval(this.loop);
        this.loop = 0;
      }
      if (this.isInit) {
        this.init();
      }

    }
  }

  _n: any = 1;
  get n(): any {
    return this._n;
  }

  @Input('days')
  set n(n: any) {
    console.log(n);
    this._n = n;
    if (this.loop) {
      this.t = 0;
      clearInterval(this.loop);
      this.loop = 0;
    }
    if (this.isInit) {
      this.init();
    }
  }

  isInit = false;

  options: any = {};
  themeSubscription: any;

  days = [1, 5, 20, 100];
  aspect = "main";
  oldData: any = [];

  t = 0;
  loop: any;

  background = {
    type: 'linearGradient',
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 1,
    colorStops: [{
      offset: 0,
      color: '#d2e6c9'
    }, {
      offset: 1,
      color: 'white'
    }]
  };
  maxColumn = 0;

  r = 0;
  chart = null;

  changeLevel = function (day) {

    this.n = parseInt(day);
    this.oldData[1] = [];
    this.oldData[5] = [];
    this.oldData[20] = [];
    this.oldData[100] = [];

    this.t = 0;
    var maxColumn = 0;
    this.calPopular(this.n, this.r);
  }

  changeAspect = function (n) {
    this.oldData[1] = [];
    this.oldData[5] = [];
    this.oldData[20] = [];
    this.oldData[100] = [];

    this.t = 0;

    var isPlay = false;
    var sellNotification = false;
    var maxColumn = 0;
    if (this.aspect == "main") {
      this.r = 1;
      this.aspect = "little";
    } else {
      this.r = 0;
      this.aspect = "main";
    }

    this.calPopular(this.n, this.r);
  };

  constructor(private theme: NbThemeService,
    private stockService: StockService) {
  }

  ngAfterViewInit() {
    this.isInit = true;
    this.init();
  }

  init(){
    this.oldData[1] = [];
    this.oldData[5] = [];
    this.oldData[20] = [];
    this.oldData[100] = [];
    let _this = this;
    if (!this.loop) {
      this.loop = setInterval(function () { _this.showPopular() }, 10000);
    }
    this.showPopular();
  }

  showPopular() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.stockService.getPopular(this.stock, this.n, this.t).subscribe(data => {

        console.log(data);

        if (data.length < this.n)
          return;

        var maxColumn = 0;
        var minValue = 100000;
        var maxValue = 0;
        data = this.oldData[this.n].concat(data);

        this.oldData[this.n] = data.slice();

        var arr = [];
        arr[0] = [];
        arr[1] = [];
        arr[2] = [];
        arr[3] = [];
        arr[4] = [];
        arr[5] = [];
        arr[6] = [];


        var gt = [];
        var lt = [];

        var delta = 0;

        var minP = 100000;
        var maxP = 0;

        this.t = data[data.length - 1].t;
        var mid = Math.floor(data.length / 2);
        delta = data[mid].dex - data[mid].strong;

        var min = 100000;

        for (var i = 0; i < data.length; i++) {
          arr[2].push([1000 * parseInt(data[i].t), parseFloat(data[i].strong) + delta]);
          arr[1].push([1000 * parseInt(data[i].t), parseFloat(data[i].dex)]);

          if (parseFloat(data[i].dex) > maxValue) {
            maxValue = parseFloat(data[i].dex);
          }
          if (parseFloat(data[i].strong) + delta > maxValue) {
            maxValue = parseFloat(data[i].strong) + delta;
          }
          if (parseFloat(data[i].dex) < minValue) {
            minValue = parseFloat(data[i].dex);
          }
          if (parseFloat(data[i].strong) + delta < minValue) {
            minValue = parseFloat(data[i].strong) + delta;
          }

          if (parseFloat(data[i].dex) < min)
            min = parseFloat(data[i].dex);
        }
        for (var i = 0; i < data.length; i++) {
          var cl = Math.round(parseFloat(data[i].clmn) / 1000);

          if (cl > 4000) {
            cl = 4000;
          }
          arr[0].push([1000 * parseInt(data[i].t), cl]);

          if (cl > maxColumn)
            maxColumn = cl;
        }

        for (var i = 1; i < data.length; i++) {
          if (i > 1 && arr[1][i][1] < arr[1][i - 1][1]) {
            if (arr[2][i][1] > arr[2][i - 1][1]) {
              var last = gt[gt.length - 1];
              var append = 0;
              if (typeof (last) == "object" && last[0] == i - 1) {
                append = last[1];
              }
              gt.push([i, arr[2][i][1] - arr[2][i - 1][1] + append]);
              if (gt[gt.length - 1][1] > 3) {
                arr[3].push([1000 * parseInt(data[i].t), arr[1][i][1]]);
              } else if (gt[gt.length - 1][1] > 2) {
                arr[5].push([1000 * parseInt(data[i].t), arr[1][i][1]]);
              }
            }
          }

          if (i > 1 && arr[1][i][1] > arr[1][i - 1][1]) {
            if (arr[2][i][1] < arr[2][i - 1][1]) {
              var last = lt[lt.length - 1];
              var append = 0;
              if (typeof (last) == "object" && last[0] == i - 1) {
                append = last[1];
              }
              lt.push([i, arr[2][i][1] - arr[2][i - 1][1] + append]);
              if (lt[lt.length - 1][1] < -3) {
                arr[4].push([1000 * parseInt(data[i].t), arr[1][i][1]]);
              } else if (lt[lt.length - 1][1] < -2) {
                arr[6].push([1000 * parseInt(data[i].t), arr[1][i][1]]);
              }
            }
          }
          if (arr[2][i][1] > maxP) {
            maxP = arr[2][i][1];
          }
          if (arr[2][i][1] < minP) {
            minP = arr[2][i][1];
          }
        }

        console.log(arr);

        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primary, echarts.textColor, colors.info, colors.danger, colors.success],
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
          // dataset: {
          //   dimensions: ['t', 'clmn', 'dex',  'strong'],
          //   // 提供一份数据。
          //   source: data
          // },
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
            max: maxValue,
            min: minValue,
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
            max: 2 * maxColumn,
            splitLine: {
              show: false
            },
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
          // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
          series: [
            {
              // encode: {x: 0, y: 1},
              name: '成交量',
              type: 'bar',
              yAxisIndex: 1,
              data: arr[0]
            },
            {
              // encode: {x: 0, y: 2},
              name: '指数',
              type: 'line',
              data: arr[1]
            },
            {
              // encode: {x: 0, y: 3},
              name: '趋势',
              type: 'line',
              data: arr[2],
              markLine: {
                data: [
                  {
                    name: 'min',
                    yAxis: minP
                  }, {
                    name: 'max',
                    yAxis: maxP
                  }
                ]
              }
            },
            {
              name: '买入',
              type: 'scatter',
              data: arr[3]
            },
            {
              name: '卖出',
              type: 'scatter',
              data: arr[4]
            },
            // {
            //   data:{

            //   }
            // }
          ]
        };
      });
    });
  }

  ngOnDestroy(): void {
    if (this.loop) {
      clearInterval(this.loop);
    }
    if (this.themeSubscription)
      this.themeSubscription.unsubscribe();
  }
}
