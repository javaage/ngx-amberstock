import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class TrafficBar {
  data: number[];
  labels: string[];
  formatter: string;
}

@Injectable()
export class StockService {

  private data = { };

  constructor(private http: HttpClient) {}

  getStockDelta(code): Observable<any> {
    return this.http.get(`http://47.94.203.104:8001/stockDelta/${code}`);
  }
  
  getStockDeltaCode(): Observable<any> {
    return this.http.get(`http://47.94.203.104:8000/daily/getStockDeltaCode.php`);
  }
}


