import { Injectable } from '@angular/core';

@Injectable()
export class ConstService {

  public categories :any[]= [{code: "399243.SZ", name: "科研指数"},
  {code: "000077.SH", name: "信息等权"},
  {code: "399244.SZ", name: "公共指数"},
  {code: "399351.SZ", name: "深圳报业指数"},
  {code: "399397.SZ", name: "OCT文化"},
  {code: "000018.SH", name: "180金融"},
  {code: "000025.SH", name: "180基建"},
  {code: "000026.SH", name: "180资源"},
  {code: "000033.SH", name: "上证材料"},
  {code: "000035.SH", name: "上证可选"},
  {code: "000037.SH", name: "上证医药"},
  {code: "000038.SH", name: "上证金融"},
  {code: "000039.SH", name: "上证信息"},
  {code: "000043.SH", name: "超大盘"},
  {code: "000054.SH", name: "上证海外"},
  {code: "000055.SH", name: "上证地企"},
  {code: "000066.SH", name: "上证商品"},
  {code: "000068.SH", name: "上证资源"},
  {code: "000070.SH", name: "能源等权"},
  {code: "000071.SH", name: "材料等权"},
  {code: "000072.SH", name: "工业等权"},
  {code: "000073.SH", name: "可选等权"},
  {code: "000078.SH", name: "电信等权"},
  {code: "000092.SH", name: "资源50"},
  {code: "000094.SH", name: "上证上游"},
  {code: "000109.SH", name: "380医药"},
  {code: "000110.SH", name: "380金融"},
  {code: "000121.SH", name: "医药主题"},
  {code: "000122.SH", name: "农业主题"},
  {code: "000145.SH", name: "优势资源"},
  {code: "000146.SH", name: "优势制造"},
  {code: "000153.SH", name: "上证民企红利"},
  {code: "000160.SH", name: "沪新丝路"},
  {code: "399232.SZ", name: "采矿指数"},
  {code: "399235.SZ", name: "建筑指数"},
  {code: "399236.SZ", name: "批零指数"},
  {code: "399241.SZ", name: "地产指数"},
  {code: "399248.SZ", name: "文化指数"},
  {code: "399249.SZ", name: "综企指数"},
  {code: "399335.SZ", name: "深证央企"},
  {code: "399355.SZ", name: "CBN长江"},
  {code: "399357.SZ", name: "CBN渤海"},
  {code: "399359.SZ", name: "国证基建"},
  {code: "399395.SZ", name: "国证有色"},
  {code: "399410.SZ", name: "苏州率先"},
  {code: "399417.SZ", name: "新能源车"},
  {code: "399423.SZ", name: "中关村50"},
  {code: "399433.SZ", name: "国证交运"},
  {code: "399434.SZ", name: "国证传媒"},
  {code: "399441.SZ", name: "生物医药"},
  {code: "399551.SZ", name: "央视创新"},
  {code: "399555.SZ", name: "央视责任"},
  {code: "399613.SZ", name: "深证能源"},
  {code: "399621.SZ", name: "深证电信"},
  {code: "399638.SZ", name: "深证环保"},
  {code: "399652.SZ", name: "中创高新"},
  {code: "399669.SZ", name: "深证农业"},
  {code: "399704.SZ", name: "深证上游"},
  {code: "000006.SH", name: "上证房地产指数"},
  {code: "000015.SH", name: "上证红利"},
  {code: "000016.SH", name: "上证50"},
  {code: "000027.SH", name: "180运输"},
  {code: "000032.SH", name: "上证能源"},
  {code: "000034.SH", name: "上证工业"},
  {code: "000036.SH", name: "上证消费"},
  {code: "000040.SH", name: "上证电信"},
  {code: "000041.SH", name: "上证公用"},
  {code: "000042.SH", name: "上证央企"},
  {code: "000049.SH", name: "上证民企"},
  {code: "000050.SH", name: "50等权"},
  {code: "000052.SH", name: "50基本"},
  {code: "000062.SH", name: "上证沪企"},
  {code: "000063.SH", name: "上证周期"},
  {code: "000074.SH", name: "消费等权"},
  {code: "000075.SH", name: "医药等权"},
  {code: "000076.SH", name: "金融等权"},
  {code: "000079.SH", name: "公用等权"},
  {code: "000097.SH", name: "高端装备"},
  {code: "000103.SH", name: "沪消费品"},
  {code: "000104.SH", name: "380能源"},
  {code: "000108.SH", name: "380消费"},
  {code: "000111.SH", name: "380信息"},
  {code: "000112.SH", name: "380电信"},
  {code: "000113.SH", name: "380公用"},
  {code: "000114.SH", name: "持续产业"},
  {code: "000126.SH", name: "上证消费50"},
  {code: "000134.SH", name: "上证银行"},
  {code: "000147.SH", name: "优势消费"},
  {code: "000149.SH", name: "上证180红利"},
  {code: "000150.SH", name: "上证380红利"},
  {code: "000151.SH", name: "上证国企红利"},
  {code: "000152.SH", name: "上证央企红利"},
  {code: "000158.SH", name: "上证环保"},
  {code: "000970.SH", name: "ESG.SH"},
  {code: "399231.SZ", name: "农林指数"},
  {code: "399234.SZ", name: "水电指数"},
  {code: "399237.SZ", name: "运输指数"},
  {code: "399238.SZ", name: "餐饮指数"},
  {code: "399240.SZ", name: "金融指数"},
  {code: "399242.SZ", name: "商务指数"},
  {code: "399310.SZ", name: "国证50"},
  {code: "399321.SZ", name: "国证红利"},
  {code: "399324.SZ", name: "深证红利"},
  {code: "399328.SZ", name: "深证治理"},
  {code: "399332.SZ", name: "深证创新"},
  {code: "399350.SZ", name: "皖江30"},
  {code: "399353.SZ", name: "国证物流"},
  {code: "399356.SZ", name: "CBN珠江"},
  {code: "399358.SZ", name: "泰达环保指数"},
  {code: "399361.SZ", name: "国证商业"},
  {code: "399365.SZ", name: "国证农业"},
  {code: "399367.SZ", name: "巨潮地产"},
  {code: "399368.SZ", name: "国证军工"},
  {code: "399378.SZ", name: "南方低碳"},
  {code: "399381.SZ", name: "1000能源"},
  {code: "399385.SZ", name: "1000消费"},
  {code: "399390.SZ", name: "1000公用"},
  {code: "399396.SZ", name: "国证食品"},
  {code: "399419.SZ", name: "国证高铁"},
  {code: "399420.SZ", name: "国证保证"},
  {code: "399431.SZ", name: "国证银行"},
  {code: "399432.SZ", name: "国证汽车"},
  {code: "399435.SZ", name: "国证农牧"},
  {code: "399436.SZ", name: "国证煤炭"},
  {code: "399437.SZ", name: "国证证券"},
  {code: "399438.SZ", name: "国证电力"},
  {code: "399439.SZ", name: "国证油气"},
  {code: "399440.SZ", name: "国证钢铁"},
  {code: "399550.SZ", name: "央视50"},
  {code: "399552.SZ", name: "央视成长"},
  {code: "399553.SZ", name: "央视回报"},
  {code: "399554.SZ", name: "央视治理"},
  {code: "399556.SZ", name: "央视生态"},
  {code: "399557.SZ", name: "央视文化"},
  {code: "399617.SZ", name: "深证消费"},
  {code: "399618.SZ", name: "深证医药"},
  {code: "399619.SZ", name: "深证金融"},
  {code: "399622.SZ", name: "深证公用"},
  {code: "399637.SZ", name: "深证地产"},
  {code: "399639.SZ", name: "深证大宗"},
  {code: "399646.SZ", name: "深消费50"},
  {code: "399647.SZ", name: "深医药50"},
  {code: "399649.SZ", name: "中小板红利"},
  {code: "399650.SZ", name: "中小板治理"},
  {code: "399651.SZ", name: "中小板责任"},
  {code: "399654.SZ", name: "深证文化"},
  {code: "399671.SZ", name: "深防御50"},
  {code: "399672.SZ", name: "深红利50"},
  {code: "399701.SZ", name: "深证F60"}];

  constructor() { }

}