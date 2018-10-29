import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Bithumb, Upbit, CurrencyTime } from '../../services/currency/currency';
import { CurrencyService } from '../../services/currency/currency.service';
import { element } from 'protractor';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    // lineChart
    public lineChartData: Array<any> = [
        { data: [], label: 'Bithumb' },
        { data: [], label: 'Upbit' },
    ];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(255, 194, 207, 0.5)',
            borderColor: 'rgb(255, 99, 131)',
            pointBackgroundColor: 'rgb(103, 58, 183)',
            pointBorderColor: '#dc3545',
            pointHoverBackgroundColor: '#dc3545',
            pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
        },
        {
            backgroundColor: 'rgba(255,235,190,0.5)',
            borderColor: 'rgba(254,207,89,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#ffc107',
            pointHoverBackgroundColor: '#ffc107',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    bithumbArr:Bithumb[] = [];
    upbitArr:Upbit[] = [];
    
    startTime:number = 20181016010000;
    endTime:number = 20181016080000;
    interval:number = 10000;
    tune:number = 1000;
    
    constructor(private currencyService:CurrencyService) {

    }

    ngOnInit() {
        var tempTime = this.startTime;
        
        while(tempTime <= this.endTime) {
            this.lineChartLabels.push(this.numberToDate(tempTime));

            this.currencyService.chartsBithumb(new CurrencyTime('BTC', tempTime.toString(), (tempTime + 1000).toString()))
                                .subscribe(res => { 
                                    if(res[res.length - 1] != null) {
                                        // this.lineChartData[0]['data'].push(res[res.length - 1]['closing_price']);
                                        this.bithumbArr.push(res[res.length - 1]);
                                        this.sortBithumbData(this.bithumbArr, this.lineChartData[0]['data']);
                                    }
                                }, error => { console.log(error)});
            this.currencyService.chartsUpbit(new CurrencyTime('KRW-BTC', tempTime.toString(), (tempTime + 1000).toString()))
                                .subscribe(res => { 
                                    if(res[res.length - 1] != null) {
                                        // this.lineChartData[1]['data'].push(res[res.length - 1]['trade_price']);
                                        this.upbitArr.push(res[res.length - 1]);
                                        this.sortUpbitData(this.upbitArr, this.lineChartData[1]['data']);

                                    }
                                    
                                }, error => { console.log(error)});

            tempTime += this.interval;
        }        
    }

    numberToDate(num:number):string {
        var tempString = num.toString();
        var returnString = tempString.substring(0, 4) + '-' + 
                           tempString.substring(4, 6) + '-' +
                           tempString.substring(6, 8) + ' ' +
                           tempString.substring(8, 10) + ':' +
                           tempString.substring(10, 12);

        return returnString;
    }

    sortBithumbData(date:Bithumb[], chartData:any) {
        for(var i = 0; i < date.length - 1; ++i) {
            for(var j = i + 1; j < date.length; ++j) {
                if(date[i]['bithumb_date'] > date[j]['bithumb_date']) {
                    var temp = date[i];
                    date[i] = date[j];
                    date[j] = temp;
                }
            }
        }

        date.forEach(function(value, index) {
            chartData[index] = date[index]['closing_price'];
        });
    }

    sortUpbitData(date:Upbit[], chartData:any) {
        for(var i = 0; i < date.length - 1; ++i) {
            for(var j = i + 1; j < date.length; ++j) {
                if(date[i]['upbit_date'] > date[j]['upbit_date']) {
                    var temp = date[i];
                    date[i] = date[j];
                    date[j] = temp;
                }
            }
        }

        date.forEach(function(value, index) {
            chartData[index] = date[index]['trade_price'];
        });
    }
}
