import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bithumb, Upbit, CurrencyTime } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  // addBithumb
  addBithumb(bithumb:Bithumb) {
    
    var url = "http://localhost:8090/addBithumb";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, bithumb, httpOptions);
  }

  // addUpbit
  addUpbit(upbit:Upbit) {
    
    var url = "http://localhost:8090/addUpbit";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, upbit, httpOptions);
  }
  
  getBithumb(url:string, currency:string):Observable<Bithumb> {
    return this.http.get(url + currency).pipe(map(res => {
      var bithumbData = null;
      if(res['status'] == '0000') {
        var data = res['data'];
        var date = new Date();
        var time = date.getTime();
        
        bithumbData = new Bithumb();
        bithumbData.bithumb_pk = time + currency;
        bithumbData.bithumb_date = time;
        bithumbData.currency = currency;
        bithumbData.opening_price = data['opening_price'];
        bithumbData.closing_price = data['closing_price'];
        bithumbData.min_price = data['min_price'];
        bithumbData.max_price = data['max_price'];
        bithumbData.average_price = data['average_price'];
        bithumbData.units_traded = data['units_traded'];
        bithumbData.volume_1day = data['volume_1day'];
        bithumbData.volume_7day = data['volume_7day'];
        bithumbData.buy_price = data['buy_price'];
        bithumbData.sell_price = data['sell_price'];
        bithumbData.fluctate_24H = data['24H_fluctate'];
        bithumbData.fluctate_rate_24H = data['24H_fluctate_rate'];
      }

      return bithumbData;
    }));
  }

  getUpbit(url:string, currency:string):Observable<Upbit> {
    return this.http.get(url + currency).pipe(map(res => {
      var upbitData = null;
      if(res[0]['market']) {
        var data = res[0];
            var date = new Date();
            var time = date.getTime();

            upbitData = new Upbit();
            upbitData.upbit_pk = time + currency;
            upbitData.upbit_date = time;
            upbitData.market = currency;
            upbitData.opening_price = data['opening_price'];
            upbitData.high_price = data['high_price'];
            upbitData.low_price = data['low_price'];
            upbitData.trade_price = data['trade_price'];
            upbitData.prev_closing_price = data['prev_closing_price'];
            upbitData.changes = data['change'];
            upbitData.change_price = data['change_price'];
            upbitData.change_rate = data['change_rate'];
            upbitData.signed_change_price = data['signed_change_price'];
            upbitData.signed_change_rate = data['signed_change_rate'];
            upbitData.trade_volume = data['trade_volume'];
            upbitData.acc_trade_price = data['acc_trade_price'];
            upbitData.acc_trade_price_24h = data['acc_trade_price_24h'];
            upbitData.acc_trade_volume = data['acc_trade_volume'];
            upbitData.acc_trade_volume_24h = data['acc_trade_volume_24h'];
      }

      return upbitData;
    }));
  }

  currentBithumb():Observable<Bithumb[]> {
    var url="http://localhost:8090/currentBithumb";
    
    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res as Bithumb[];
    }));
  }

  currentUpbit():Observable<Upbit[]> {
    var url="http://localhost:8090/currentUpbit";
    
    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res as Upbit[];
    }));
  }

  chartsBithumb(currencyTime:CurrencyTime):Observable<Bithumb[]> {
    var url = "http://localhost:8090/chartsBithumb";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, currencyTime, httpOptions).pipe(map(res => {
      // console.log('pipe', res);
      return res as Bithumb[];
    }));
  }

  chartsUpbit(currencyTime:CurrencyTime):Observable<Upbit[]> {
    var url = "http://localhost:8090/chartsUpbit";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, currencyTime, httpOptions).pipe(map(res => {
      // console.log('pipe', res);
      return res as Upbit[];
    }));
  }
}
