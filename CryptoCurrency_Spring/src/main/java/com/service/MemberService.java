package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.MemberDAO;
import com.dto.Member;

@Service
public class MemberService {
	@Autowired
	MemberDAO dao;
	
	public int memberAdd (Member member) {
		System.out.println(member);
		return dao.memberAdd(member);
	}
}
