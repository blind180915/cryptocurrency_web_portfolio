-- mysql
create table bithumb (
  bithumb_pk        VARCHAR(30)   NOT NULL,
  bithumb_date      DATETIME      DEFAULT CURRENT_TIMESTAMP,
  currency          VARCHAR(10)   NOT NULL,
  opening_price     DOUBLE        NOT NULL,
  closing_price     DOUBLE        NOT NULL,
  min_price         DOUBLE        NOT NULL,
  max_price         DOUBLE        NOT NULL,
  average_price     DOUBLE        NOT NULL,
  units_traded      DOUBLE        NOT NULL,
  volume_1day       DOUBLE        NOT NULL,
  volume_7day       DOUBLE        NOT NULL,
  buy_price         DOUBLE        NOT NULL,
  sell_price        DOUBLE        NOT NULL,
  fluctate_24H      DOUBLE        NOT NULL,
  fluctate_rate_24H DOUBLE        NOT NULL,
  PRIMARY KEY (bithumb_pk)
);

create table upbit (
  upbit_pk              VARCHAR(30)   NOT NULL,
  upbit_date            DATETIME      DEFAULT CURRENT_TIMESTAMP,
  market                VARCHAR(10)   NOT NULL,
  opening_price         DOUBLE        NOT NULL,
  high_price            DOUBLE        NOT NULL,
  low_price             DOUBLE        NOT NULL,
  trade_price           DOUBLE        NOT NULL,
  prev_closing_price    DOUBLE        NOT NULL,
  changes               VARCHAR(5)    NOT NULL,
  change_price          DOUBLE        NOT NULL,
  change_rate           DOUBLE        NOT NULL,
  signed_change_price   DOUBLE        NOT NULL,
  signed_change_rate    DOUBLE        NOT NULL,
  trade_volume          DOUBLE        NOT NULL,
  acc_trade_price       DOUBLE        NOT NULL,
  acc_trade_price_24h   DOUBLE        NOT NULL,
  acc_trade_volume      DOUBLE        NOT NULL,
  acc_trade_volume_24h  DOUBLE        NOT NULL,
  PRIMARY KEY (upbit_pk)
);
  
create table member (
  email     VARCHAR(20)	NOT NULL,
  full_name VARCHAR(20) NOT NULL,
  passwd    VARCHAR(20) NOT NULL,
  PRIMARY KEY (email)
);
  
create table interest_item (
  email 	  VARCHAR(20) NOT NULL,
  currency 	VARCHAR(20) NOT NULL,
  PRIMARY KEY (email, currency)
);

