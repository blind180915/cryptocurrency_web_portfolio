package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CurrencyDAO;
import com.dto.Bithumb;
import com.dto.CurrencyTime;
import com.dto.Upbit;

@Service
public class CurrencyService {
	
	@Autowired
	CurrencyDAO dao;
	
	public int addBithumb(Bithumb bithumb) {
		return dao.addBithumb(bithumb);
	}
	
	public int addUpbit(Upbit upbit) {
		return dao.addUpbit(upbit);
	}
	
	public List<Bithumb> currentBithumb () {
		return dao.currentBithumb();
	}
	
	public List<Upbit> currentUpbit () {
		return dao.currentUpbit();
	}
	
	public List<Bithumb> chartsBithumb (CurrencyTime currencyTime) {
		return dao.chartsBithumb(currencyTime);
	}
	
	public List<Upbit> chartsUpbit (CurrencyTime currencyTime) {
		return dao.chartsUpbit(currencyTime);
	}
}
