import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-popular-query',
  templateUrl: './popular-query.component.html',
  styleUrls: ['./popular-query.component.scss']
})
export class PopularQueryComponent implements OnInit {

  stocks = [{code:'sz399006', name:'cy'},{code:'sz399678', name:'cx'},{code:'sz399001', name:'sc'},{code:'sh000016', name:'sz'},{code:'sz399807', name:'gtcy'},{code:'sz399991', name:'ydyl'},{code:'sz399995', name:'Building'},{code:'sz399959', name:'jg'},{code:'sz399239', name:'it'},{code:'sz399803', name:'gy4.0'},{code:'sz399417', name:'xnyc'},{code:'sz399441', name:'swyy'},{code:'sz399994', name:'xxaq'},{code:'sz399970', name:'ydhl'},{code:'sz399971', name:'cm'},{code:'sz399232', name:'ck'},{code:'sz399998', name:'mt'},{code:'sz399806', name:'hj'},{code:'sz399814', name:'dny'},{code:'sz399989', name:'medical'},{code:'sz399997', name:'bj'},{code:'sz399996', name:'Home Design'},{code:'sz399812', name:'Yanglao'},{code:'sz399240', name:'jr'},{code:'sz399986', name:'yh'},{code:'sz399975', name:'zq'},{code:'sz399809', name:'bx'}];
  days = [1,5,20,100];
  code = this.stocks[0].code;
  day = 1;
  constructor() { }

  ngOnInit() {
  }

  changeCode() {
    console.log(this.code);
  }

  changeDay() {
    console.log(this.day);
  }
}
