package com.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dto.Login;
import com.dto.Member;

@Repository
public class MemberDAO {
	@Autowired
	SqlSessionTemplate template;
	
	public int addMember(Member member) {
		int n = template.insert("MemberMapper.addMember", member);
		return n;
	}
	
	public Member login (Login login ) {
		Member member = template.selectOne("MemberMapper.login", login);
		return member;
	}
}
