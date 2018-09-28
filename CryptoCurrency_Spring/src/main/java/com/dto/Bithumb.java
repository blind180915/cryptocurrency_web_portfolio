package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("Bithumb")
public class Bithumb {
	private String bithumb_pk;
	private String bithumb_date;
	private String currency;
	// 최근 24시간 내 시작 거래금액
	private double opening_price;
	// 최근 24시간 내 마지막 거래금액
	private double closing_price;
	// 최근 24시간 내 최저 거래금액
	private double min_price;
	// 최근 24시간 내 최고 거래금액
	private double max_price;
	// 최근 24시간 내 평균 거래금액
	private double average_price;
	// 최근 24시간 내 Currency 거래량
	private double units_traded;
	// 최근 1일간 Currency 거래량
	private double volume_1day;
	// 최근 7일간 Currency 거래량
	private double volume_7day;
	// 거래 대기건 최고 구매가
	private double buy_price;
	// 거래 대기건 최소 판매가
	private double sell_price;
	// 24시간 변동금액
	private double fluctate_24H;
	// 24시간 변동률
	private double fluctate_rate_24H;
	
	public Bithumb() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bithumb(String bithumb_pk, String bithumb_date, String currency, double opening_price,
			double closing_price, double min_price, double max_price, double average_price, double units_traded,
			double volume_1day, double volume_7day, double buy_price, double sell_price, double fluctate_24h,
			double fluctate_rate_24H) {
		super();
		this.bithumb_pk = bithumb_pk;
		this.bithumb_date = bithumb_date;
		this.currency = currency;
		this.opening_price = opening_price;
		this.closing_price = closing_price;
		this.min_price = min_price;
		this.max_price = max_price;
		this.average_price = average_price;
		this.units_traded = units_traded;
		this.volume_1day = volume_1day;
		this.volume_7day = volume_7day;
		this.buy_price = buy_price;
		this.sell_price = sell_price;
		fluctate_24H = fluctate_24h;
		this.fluctate_rate_24H = fluctate_rate_24H;
	}

	public String getBithumb_pk() {
		return bithumb_pk;
	}

	public void setBithumb_pk(String bithumb_pk) {
		this.bithumb_pk = bithumb_pk;
	}

	public String getBithumb_date() {
		return bithumb_date;
	}

	public void setBithumb_date(String bithumb_date) {
		this.bithumb_date = bithumb_date;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public double getOpening_price() {
		return opening_price;
	}

	public void setOpening_price(double opening_price) {
		this.opening_price = opening_price;
	}

	public double getClosing_price() {
		return closing_price;
	}

	public void setClosing_price(double closing_price) {
		this.closing_price = closing_price;
	}

	public double getMin_price() {
		return min_price;
	}

	public void setMin_price(double min_price) {
		this.min_price = min_price;
	}

	public double getMax_price() {
		return max_price;
	}

	public void setMax_price(double max_price) {
		this.max_price = max_price;
	}

	public double getAverage_price() {
		return average_price;
	}

	public void setAverage_price(double average_price) {
		this.average_price = average_price;
	}

	public double getUnits_traded() {
		return units_traded;
	}

	public void setUnits_traded(double units_traded) {
		this.units_traded = units_traded;
	}

	public double getVolume_1day() {
		return volume_1day;
	}

	public void setVolume_1day(double volume_1day) {
		this.volume_1day = volume_1day;
	}

	public double getVolume_7day() {
		return volume_7day;
	}

	public void setVolume_7day(double volume_7day) {
		this.volume_7day = volume_7day;
	}

	public double getBuy_price() {
		return buy_price;
	}

	public void setBuy_price(double buy_price) {
		this.buy_price = buy_price;
	}

	public double getSell_price() {
		return sell_price;
	}

	public void setSell_price(double sell_price) {
		this.sell_price = sell_price;
	}

	public double getFluctate_24H() {
		return fluctate_24H;
	}

	public void setFluctate_24H(double fluctate_24h) {
		fluctate_24H = fluctate_24h;
	}

	public double getFluctate_rate_24H() {
		return fluctate_rate_24H;
	}

	public void setFluctate_rate_24H(double fluctate_rate_24H) {
		this.fluctate_rate_24H = fluctate_rate_24H;
	}
	
	@Override
	public String toString() {
		return "BithumbDTO [bithumb_pk=" + bithumb_pk + ", bithumb_date=" + bithumb_date + ", currency=" + currency
				+ ", opening_price=" + opening_price + ", closing_price=" + closing_price + ", min_price=" + min_price
				+ ", max_price=" + max_price + ", average_price=" + average_price + ", units_traded=" + units_traded
				+ ", volume_1day=" + volume_1day + ", volume_7day=" + volume_7day + ", buy_price=" + buy_price
				+ ", sell_price=" + sell_price + ", fluctate_24H=" + fluctate_24H + ", fluctate_rate_24H="
				+ fluctate_rate_24H + "]";
	}
}
