package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dto.Login;
import com.dto.Member;
import com.service.MemberService;

@Controller
public class MemberController {
	@Autowired
	MemberService service;
	
	@RequestMapping(value="/addMember", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody void addMember(@RequestBody Member member) {
		service.addMember(member);
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody Member login(@RequestBody Login login) {
		Member member = service.login(login);
		return member;
	}
}
