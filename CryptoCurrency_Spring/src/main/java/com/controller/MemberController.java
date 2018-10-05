package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dto.Member;
import com.service.MemberService;

@Controller
public class MemberController {
	@Autowired
	MemberService service;
	
	@RequestMapping(value="/memberAdd", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public String memberAdd(@RequestBody Member member) {
		System.out.println(member);
		int n = service.memberAdd(member);
		return "/";
	}
}
