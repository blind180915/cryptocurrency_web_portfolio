export class Bithumb {
    constructor(public bithumb_pk:string,
                public bithumb_date:number,
                public currency:string,
                public opening_price:number,
                public closing_price:number,
                public min_price:number,
                public max_price:number,
                public average_price:number,
                public units_traded:number,
                public volume_1day:number,
                public volume_7day:number,
                public buy_price:number,
                public sell_price:number,
                public fluctate_24H:number,
                public fluctate_rate_24H:number) {
    }
}

export class Upbit {
    constructor(public upbit_pk:string,
                public upbit_date:number,
                public market:string,
                public opening_price:number,
                public high_price:number,
                public low_price:number,
                public trade_price:number,
                public prev_closing_price:number,
                public changes:string,
                public change_price:number,
                public change_rate:number,
                public signed_change_price:number,
                public signed_change_rate:number,
                public trade_volume:number,
                public acc_trade_price:number,
                public acc_trade_price_24h:number,
                public acc_trade_volume:number,
                public acc_trade_volume_24h:number) {
                    
    }
}