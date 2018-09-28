package com.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dto.Bithumb;
import com.dto.Upbit;


@Repository
public class CurrencyDAO {

	@Autowired
	SqlSessionTemplate template;
	
	public int bithumbAdd(ArrayList<Bithumb> listBithumb) {
		int n = template.insert("CurrencyMapper.bithumbAdd", listBithumb);
		return n;
	}
	
	public int upbitAdd(ArrayList<Upbit> listUpbit) {
		int n = template.insert("CurrencyMapper.upbitAdd", listUpbit);
		return n;
	}
}
