package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BoardDAO;
import com.dto.Board;

@Service
public class BoardService {
	@Autowired
	BoardDAO dao;
	
	public List<Board> listBoard() {
		return dao.listBoard();
	}
	
	public int addBoard(Board board) {
		return dao.addBoard(board);
	}
	
	public int addCrawlingBoard(Board board) {
		return dao.addCrawlingBoard(board);
	}
	
	public Board getBoard (int num) {
		return dao.getBoard(num);
	}
}
