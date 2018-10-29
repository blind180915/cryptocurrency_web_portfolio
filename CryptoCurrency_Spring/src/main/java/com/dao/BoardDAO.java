package com.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dto.Board;

@Repository
public class BoardDAO {
	
	@Autowired
	SqlSessionTemplate template;
	
	public List<Board> listBoard() {
		return template.selectList("BoardMapper.listBoard");
	}
	
	public int addBoard(Board board) {
		return template.insert("BoardMapper.addBoard", board);
	}
	
	public int addCrawlingBoard(Board board) {
		return template.insert("BoardMapper.addCrawlingBoard", board);
	}
	
	public Board getBoard (int num) {
		return template.selectOne("BoardMapper.getBoard", num);
	}
	 
}
