package com.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dto.Bithumb;
import com.dto.CurrencyTime;
import com.dto.Upbit;


@Repository
public class CurrencyDAO {

	@Autowired
	SqlSessionTemplate template;
	
	public int addBithumb(Bithumb bithumb) {
		int n = template.insert("CurrencyMapper.addBithumb", bithumb);
		return n;
	}
	
	public int addUpbit(Upbit upbit) {
		int n = template.insert("CurrencyMapper.addUpbit", upbit);
		return n;
	}
	
	public List<Bithumb> currentBithumb () {
		return template.selectList("CurrencyMapper.currentBithumb");
	}
	
	public List<Upbit> currentUpbit () {
		return template.selectList("CurrencyMapper.currentUpbit");
	}
	
	public List<Bithumb> chartsBithumb (CurrencyTime currencyTime) {
		return template.selectList("CurrencyMapper.chartsBithumb", currencyTime);
	}
	
	public List<Upbit> chartsUpbit (CurrencyTime currencyTime) {
		return template.selectList("CurrencyMapper.chartsUpbit", currencyTime);
	}
}
