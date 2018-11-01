import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
    return this.http.get(`${environment.pythonUrl}/stockDelta/${code}`);
  }

  getIndexDelta(code): Observable<any> {
    return this.http.get(`${environment.pythonUrl}/indexDelta/${code}`);
  }
  
  getStockDeltaCode(): Observable<any> {
    return this.http.get(`${environment.phpUrl}/daily/getStockDeltaCode.php`);
  }

  getIndexDeltaCode(): Observable<any> {
    return this.http.get(`${environment.phpUrl}/daily/getIndexDeltaCode.php`);
  }

  getPopular(code, n=0, t=0): Observable<any> {

    return this.http.get(`${environment.phpUrl}/other/cy.php?n=${n}&t=${t}&code=${code}`);
  }
}


