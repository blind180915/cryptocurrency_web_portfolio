package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("Member")
public class Member {
	private String email;
    private String full_name;
    private String passwd;
    
    public Member() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    public Member(String email, String full_name, String passwd) {
		super();
		this.email = email;
		this.full_name = full_name;
		this.passwd = passwd;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	@Override
	public String toString() {
		return "Member [email=" + email + ", full_name=" + full_name + ", passwd=" + passwd + "]";
	}
}
