package com.dto;

import org.apache.ibatis.type.Alias;

@Alias("Board")
public class Board {
	private int num;
	private String title;
	private String email;
	private int readCount;
	private String writeday;
	private String content;
	
	public Board() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Board(int num, String title, String email, int readCount, String writeday, String content) {
		super();
		this.num = num;
		this.title = title;
		this.email = email;
		this.readCount = readCount;
		this.writeday = writeday;
		this.content = content;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getReadCount() {
		return readCount;
	}

	public void setReadCount(int readCount) {
		this.readCount = readCount;
	}

	public String getWriteday() {
		return writeday;
	}

	public void setWriteday(String writeday) {
		this.writeday = writeday;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Board [num=" + num + ", title=" + title + ", email=" + email + ", readCount=" + readCount
				+ ", writeday=" + writeday + ", content=" + content + "]";
	}
}
