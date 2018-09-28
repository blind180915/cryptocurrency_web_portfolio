//package com.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//import com.dto.Member;
//import com.service.CurrencyService;
//
//@Controller
//public class CurrencyController {
//	@Autowired
//	CurrencyService service;
//	@RequestMapping(value="/currencyAdd"
//			, method=RequestMethod.POST)
//	public String currencyAdd(Member m, Model x) {
//		
//		int n = service.memberAdd(m);
//		x.addAttribute("success", "회원가입 성공");
//		return "home";
//	}
//	
//}
