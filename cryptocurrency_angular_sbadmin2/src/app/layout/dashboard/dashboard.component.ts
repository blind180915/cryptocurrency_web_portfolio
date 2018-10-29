import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CurrencyService } from '../../services/currency/currency.service';
import { Bithumb, Upbit, Currency, CurrencyUtil } from '../../services/currency/currency';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    constructor(private service:CurrencyService) {
       
    }
    bithumbArr:Bithumb[];
    upbitArr:Upbit[];
    // 화면에 보여지는 부분을 변경하기 위해서
    currencyUtil:CurrencyUtil = new CurrencyUtil;
    currencyBithumb:Currency[] = new Array<Currency>();
    currencyUpbit:Currency[] = new Array<Currency>();

    ngOnInit() {
        this.currentBithumb();
        this.currentUpbit()
    }

    currentBithumb() {
        this.service.currentBithumb().subscribe(res => { 
            var currencyArr = this.currencyUtil.currency;
            var currencyLength = currencyArr.length;
            var resLength = res.length
            for(var i = 0; i < currencyLength; ++i) {
                this.currencyBithumb.push(new Currency(this.currencyUtil.currency_kr[i], 0, 0, ''));
                for(var j = 0; j < resLength; ++j) {
                    if(res[j].currency.includes(currencyArr[i])) {
                        this.currencyBithumb[i].price = res[j].closing_price;
                        this.currencyBithumb[i].change_rate = res[j].fluctate_rate_24H;
                        if(this.currencyBithumb[i].change_rate > 0) {
                            this.currencyBithumb[i].color = 'blue';
                        } else {
                            this.currencyBithumb[i].color = 'red';
                        }
                        break;
                    }
                }
            }
        },error => {
            console.log(error)
        });
    }

    currentUpbit() {
        this.service.currentUpbit().subscribe(res => { 
            var currencyArr = this.currencyUtil.currency;
            var currencyLength = currencyArr.length;
            var resLength = res.length
            for(var i = 0; i < currencyLength; ++i) {
                this.currencyUpbit.push(new Currency(this.currencyUtil.currency_kr[i], 0, 0, ''));
                for(var j = 0; j < resLength; ++j) {
                    if(res[j].market.includes(currencyArr[i])) {
                        this.currencyUpbit[i].price = res[j].trade_price;
                        this.currencyUpbit[i].change_rate = res[j].signed_change_rate;
                        if(this.currencyUpbit[i].change_rate > 0) {
                            this.currencyUpbit[i].color = 'blue';
                        } else {
                            this.currencyUpbit[i].color = 'red';
                        }
                        break;
                    }
                }
            }
        },error => {
            console.log(error)
        });
    }
}
