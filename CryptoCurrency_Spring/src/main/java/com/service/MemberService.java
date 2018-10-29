package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.MemberDAO;
import com.dto.Login;
import com.dto.Member;

@Service
public class MemberService {
	@Autowired
	MemberDAO dao;
	
	public int addMember (Member member) {
		return dao.addMember(member);
	}
	
	public Member login (Login login) {
		return dao.login(login);
	}
}
