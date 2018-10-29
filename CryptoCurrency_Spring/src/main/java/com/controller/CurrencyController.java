package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dto.Bithumb;
import com.dto.CurrencyTime;
import com.dto.Upbit;
import com.service.CurrencyService;

@Controller
public class CurrencyController {
	@Autowired
	CurrencyService service;
	
	@RequestMapping(value="/addBithumb", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody void addBithumb(@RequestBody Bithumb bithumb) {
		System.out.println(bithumb);
		service.addBithumb(bithumb);
	}
	
	@RequestMapping(value="/addUpbit", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody void addUpbit(@RequestBody Upbit upbit) {
		System.out.println(upbit);
		service.addUpbit(upbit);
	}
	
	@RequestMapping(value="/currentBithumb", method=RequestMethod.GET)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Bithumb> currentBithumb() {
		List<Bithumb> listBithumb = service.currentBithumb();
		return listBithumb;
	}// end currentBithumb()
	
	@RequestMapping(value="/currentUpbit", method=RequestMethod.GET)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Upbit> currentUpbit() {
		List<Upbit> listUpbit = service.currentUpbit();
		return listUpbit;
	}// end currentUpbit()
	
	@RequestMapping(value="/chartsBithumb", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Bithumb> chartsBithumb(@RequestBody CurrencyTime currencyTime) {
		System.out.println("chartsBithumb" + currencyTime);
		List<Bithumb> listBithumb = service.chartsBithumb(currencyTime);
	
		return listBithumb;
	}
	
	@RequestMapping(value="/chartsUpbit", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Upbit> chartsUpbit(@RequestBody CurrencyTime currencyTime) {
		System.out.println("chartsUpbit" + currencyTime);
		List<Upbit> listUpbit = service.chartsUpbit(currencyTime);
		
		return listUpbit;
	}
}
