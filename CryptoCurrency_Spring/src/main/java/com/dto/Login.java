package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("Login")
public class Login {
	private String email;
	private String passwd;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String email, String passwd) {
		super();
		this.email = email;
		this.passwd = passwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	@Override
	public String toString() {
		return "Login [email=" + email + ", passwd=" + passwd + "]";
	}
}
