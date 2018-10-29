export class Bithumb {
    bithumb_pk:string;
    bithumb_date:number;
    currency:string;
    opening_price:number;
    closing_price:number;
    min_price:number;
    max_price:number;
    average_price:number;
    units_traded:number;
    volume_1day:number;
    volume_7day:number;
    buy_price:number;
    sell_price:number;
    fluctate_24H:number;
    fluctate_rate_24H:number;
}

export class Upbit {
    upbit_pk:string;
    upbit_date:number;
    market:string;
    opening_price:number;
    high_price:number;
    low_price:number;
    trade_price:number;
    prev_closing_price:number;
    changes:string;
    change_price:number;
    change_rate:number;
    signed_change_price:number;
    signed_change_rate:number;
    trade_volume:number;
    acc_trade_price:number;
    acc_trade_price_24h:number;
    acc_trade_volume:number;
    acc_trade_volume_24h:number;
}

export class Currency {
    currency:string;
    price:number;
    change_rate:number;
    color:string;

    constructor(currency:string, price:number, change_rate:number, color:string) {
        this.currency = currency;
        this.price = price;
        this.change_rate = change_rate;
        this.color = color;
    }
}

export class CurrencyUtil {
    // currency
    currency:string[] = ['BTC', 'ETH', 'DASH', 'LTC', 'ETC', 'XRP', 'BCH', 'XMR', 'ZEC', 
    'QTUM', 'BTG', 'EOS', 'ICX', 'VET', 'TRX', 'ELF', 'MITH', 'MCO', 'OMG', 'KNC', 
    'GNT', 'HSR', 'ZIL', 'ETHOS', 'PAY', 'WAX', 'POWR', 'LRC', 'GTO', 'STEEM', 'STRAT', 
    'ZRX', 'REP', 'AE', 'XEM', 'SNT', 'ADA', 'PPT', 'CTXC', 'CMT', 'THETA', 'WTC', 'ITC', 
    'TRUE', 'ABT', 'RNT', 'PLY', 'WAVES', 'LINK'];

    currency_kr:string[] = ['비트코인', '이더리움', '대시', '라이트코인', '이더리움 클래식', '리플', 
    '비트코인 캐시','모네로', '제트캐시', '퀀텀', '비트코인 골드', '이오스', '아이콘', '비체인', '트론', 
    '엘프', '미스릴', '모나코', '오미세고', '카이버 네트워크', '골렘', '에이치쉐어', '질리카', '에토스',
    '텐엑스', '왁스', '파워렛저', '루프링', '기프토', '스팀', '스트라티스', '제로엑스', '어거', '애터니티',
    '뉴이코노미무브먼트', '스테이터스네트워크토큰', '에이다', '파퓰러스', '코르텍스', '사이버마일즈', '쎄타토큰',
    '월튼체인', '아이오티체인', '트루체인', '아크블록', '원루트 네트워크', '플레이코인', '웨이브', '체인링크'];
}

export class CurrencyTime{
    currency:string;
    // YYYYMMDDHH24MISS
    // %Y%m%d%H%i%s
    startTime:string;
    endTime:string;

    constructor(currency:string, startTime:string, endTime:string) {
        this.currency = currency;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}