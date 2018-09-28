package com.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CurrencyDAO;
import com.dto.Bithumb;
import com.dto.Upbit;

@Service
public class CurrencyService {
	
	@Autowired
	CurrencyDAO dao;
	
	public int bithumbAdd(ArrayList<Bithumb> listBithumb) {
		return dao.bithumbAdd(listBithumb);
	}
	
	public int upbitAdd(ArrayList<Upbit> listUpbit) {
		return dao.upbitAdd(listUpbit);
	}
}
