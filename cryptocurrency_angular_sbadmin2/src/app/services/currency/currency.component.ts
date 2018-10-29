import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Bithumb, Upbit, CurrencyUtil } from './currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private service:CurrencyService) { }

  // url
  bithumb_ticker:string = 'https://api.bithumb.com/public/ticker/';
  upbit_ticker:string = 'https://api.upbit.com/v1/ticker?markets=';
  currencyUtil:CurrencyUtil = new CurrencyUtil();;

  // request setInterval function
  intervalFunc;

  test:number = 0;
  ngOnInit() {
    
  }

  start() {
    console.log('start');
    var _this = this;
    this.intervalFunc = setInterval(function() {
      _this.test++;
      console.log(_this.test);
      _this.currencyUtil.currency.forEach(function(ele){
        // getBithumb
        _this.service.getBithumb(_this.bithumb_ticker, ele)
        .subscribe(res => { 
          console.log('_this.service.getBithumb', res)
          // addBithumb
          _this.service.addBithumb(res).subscribe(res => { 
            console.log(res);
          }, error => { console.log(error)});
          // end addBithumb
        }, error => {
          console.log(error)
        });
        // end getBithumb
        // getUpbit
        _this.service.getUpbit(_this.upbit_ticker, 'KRW-' + ele)
        .subscribe(res => {
          console.log('_this.service.getUpbit', res)
          // addUpbit
          _this.service.addUpbit(res).subscribe(res => { 
            console.log(res);
          }, error => { console.log(error)});
          // end addUpbit
        }, error => {
          console.log(error)
        });
        // end getUpbit
      });

    }, 2 * 60 * 1000); // 2분마다 요청
    // }, 1000);
  }
  
  stop() {
    console.log('stop');
    clearInterval(this.intervalFunc);
  }

}
