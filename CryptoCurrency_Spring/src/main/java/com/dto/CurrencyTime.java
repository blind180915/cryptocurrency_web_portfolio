package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("CurrencyTime")
public class CurrencyTime {
	private String currency;
	private String startTime;
	private String endTime;
	
	public CurrencyTime() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CurrencyTime(String currency, String startTime, String endTime) {
		super();
		this.currency = currency;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return "CurrencyTime [currency=" + currency + ", startTime=" + startTime + ", endTime=" + endTime + "]";
	}
}
