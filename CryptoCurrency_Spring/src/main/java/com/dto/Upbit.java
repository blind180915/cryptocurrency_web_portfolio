package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("Upbit")
public class Upbit {
	private String upbit_pk;
	private String upbit_date;
	private String market;
	// 시가
	private double opening_price;
	// 고가
	private double high_price;
	// 저가
	private double low_price;
	// 종가
	private double trade_price;
	// 전일 종가
	private double prev_closing_price;
	// EVEN : 보합  RISE : 상승  FALL : 하락
	private String changes;
	// 변화액의 절대값
	private double change_price;
	// 변화율의 절대값
	private double change_rate;
	// 부호가 있는 변화액
	private double signed_change_price;
	// 부호가 있는 변화율
	private double signed_change_rate;
	// 가장 최근 거래량
	private double trade_volume;
	// 누적 거래대금(UTC 0시 기준)
	private double acc_trade_price;
	// 24시간 누적 거래대금
	private double acc_trade_price_24h;
	// 누적 거래량(UTC 0시 기준)
	private double acc_trade_volume;
	// 24시간 누적 거래대금
	private double acc_trade_volume_24h;
	public Upbit() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Upbit(String upbit_pk, String upbit_date, String market, double opening_price, double high_price,
			double low_price, double trade_price, double prev_closing_price, String changes, double change_price,
			double change_rate, double signed_change_price, double signed_change_rate, double trade_volume,
			double acc_trade_price, double acc_trade_price_24h, double acc_trade_volume, double acc_trade_volume_24h) {
		super();
		this.upbit_pk = upbit_pk;
		this.upbit_date = upbit_date;
		this.market = market;
		this.opening_price = opening_price;
		this.high_price = high_price;
		this.low_price = low_price;
		this.trade_price = trade_price;
		this.prev_closing_price = prev_closing_price;
		this.changes = changes;
		this.change_price = change_price;
		this.change_rate = change_rate;
		this.signed_change_price = signed_change_price;
		this.signed_change_rate = signed_change_rate;
		this.trade_volume = trade_volume;
		this.acc_trade_price = acc_trade_price;
		this.acc_trade_price_24h = acc_trade_price_24h;
		this.acc_trade_volume = acc_trade_volume;
		this.acc_trade_volume_24h = acc_trade_volume_24h;
	}

	public String getUpbit_pk() {
		return upbit_pk;
	}
	public void setUpbit_pk(String upbit_pk) {
		this.upbit_pk = upbit_pk;
	}
	public String getUpbit_date() {
		return upbit_date;
	}
	public void setUpbit_date(String upbit_date) {
		this.upbit_date = upbit_date;
	}
	public String getMarket() {
		return market;
	}
	public void setMarket(String market) {
		this.market = market;
	}
	public double getOpening_price() {
		return opening_price;
	}
	public void setOpening_price(double opening_price) {
		this.opening_price = opening_price;
	}
	public double getHigh_price() {
		return high_price;
	}
	public void setHigh_price(double high_price) {
		this.high_price = high_price;
	}
	public double getLow_price() {
		return low_price;
	}
	public void setLow_price(double low_price) {
		this.low_price = low_price;
	}
	public double getTrade_price() {
		return trade_price;
	}
	public void setTrade_price(double trade_price) {
		this.trade_price = trade_price;
	}
	public double getPrev_closing_price() {
		return prev_closing_price;
	}
	public void setPrev_closing_price(double prev_closing_price) {
		this.prev_closing_price = prev_closing_price;
	}
	public String getChanges() {
		return changes;
	}
	public void setChanges(String changes) {
		this.changes = changes;
	}
	public double getChange_price() {
		return change_price;
	}
	public void setChange_price(double change_price) {
		this.change_price = change_price;
	}
	public double getChange_rate() {
		return change_rate;
	}
	public void setChange_rate(double change_rate) {
		this.change_rate = change_rate;
	}
	public double getSigned_change_price() {
		return signed_change_price;
	}
	public void setSigned_change_price(double signed_change_price) {
		this.signed_change_price = signed_change_price;
	}
	public double getSigned_change_rate() {
		return signed_change_rate;
	}
	public void setSigned_change_rate(double signed_change_rate) {
		this.signed_change_rate = signed_change_rate;
	}
	public double getTrade_volume() {
		return trade_volume;
	}
	public void setTrade_volume(double trade_volume) {
		this.trade_volume = trade_volume;
	}
	public double getAcc_trade_price() {
		return acc_trade_price;
	}
	public void setAcc_trade_price(double acc_trade_price) {
		this.acc_trade_price = acc_trade_price;
	}
	public double getAcc_trade_price_24h() {
		return acc_trade_price_24h;
	}
	public void setAcc_trade_price_24h(double acc_trade_price_24h) {
		this.acc_trade_price_24h = acc_trade_price_24h;
	}
	public double getAcc_trade_volume() {
		return acc_trade_volume;
	}
	public void setAcc_trade_volume(double acc_trade_volume) {
		this.acc_trade_volume = acc_trade_volume;
	}
	public double getAcc_trade_volume_24h() {
		return acc_trade_volume_24h;
	}
	public void setAcc_trade_volume_24h(double acc_trade_volume_24h) {
		this.acc_trade_volume_24h = acc_trade_volume_24h;
	}
	
	@Override
	public String toString() {
		return "UpbitDTO [upbit_pk=" + upbit_pk + ", upbit_date=" + upbit_date + ", market=" + market
				+ ", opening_price=" + opening_price + ", high_price=" + high_price + ", low_price=" + low_price
				+ ", trade_price=" + trade_price + ", prev_closing_price=" + prev_closing_price + ", change=" + changes
				+ ", change_price=" + change_price + ", change_rate=" + change_rate + ", signed_change_price="
				+ signed_change_price + ", signed_change_rate=" + signed_change_rate + ", trade_volume=" + trade_volume
				+ ", acc_trade_price=" + acc_trade_price + ", acc_trade_price_24h=" + acc_trade_price_24h
				+ ", acc_trade_volume=" + acc_trade_volume + ", acc_trade_volume_24h=" + acc_trade_volume_24h + "]";
	}
}
