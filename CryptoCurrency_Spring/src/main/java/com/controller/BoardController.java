package com.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dto.Board;
import com.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	BoardService service;
	
	public Board BoardCrawling() {
		return null;
	}
	
	@RequestMapping(value="/listBoard", method=RequestMethod.GET)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Board> listBoard() {
		
		return service.listBoard();
	}
	
	@RequestMapping(value="/addBoard", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody void addBoard(@RequestBody Board board) {
		service.addBoard(board);
	}
	
	@RequestMapping(value="/addCrawlingBoard", method=RequestMethod.POST)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody void addCrawlingBoard(@RequestBody Board board) {
		service.addCrawlingBoard(board);
	}
	
	@RequestMapping(value="/crawlingBoard", method=RequestMethod.GET)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody List<Board> crawlingBoard() throws IOException {
		// 한줄 10
		
		String COMPLETE_URL = "http://cointalk.co.kr/bbs/board.php?bo_table=beginner&wr_id=";
		int start = 11330;
		List<Board> listBoard = new ArrayList<Board>();
		
		for(int i = start; i >= start - 10; --i) {
			Document doc = Jsoup.connect(COMPLETE_URL + String.valueOf(i)).get();
			System.out.println(doc.text());
			Elements subject = doc.select("#st-view .subject");
			System.out.println(subject.text());
			Elements content = doc.select("#st-view .content p");
			System.out.println(content.text());
			if(subject.text().length() == 0) {
				continue;
			} else {
				System.out.println(subject.text());
				listBoard.add(new Board(i, subject.text(), "sw2725@naver.com", 0, "10-22", content.text()));
			}
		}
		
		return listBoard;
	}
	
	@RequestMapping(value="/getBoard/{num}", method=RequestMethod.GET)
	@CrossOrigin	// cross domain 해결
	public @ResponseBody Board getBoard(@PathVariable int num) {
		return service.getBoard(num);
		
	}// end list()
	
	public void updateBoard(Board board) {
		
	}
	
	public void deleteBoard(int num) {
		
	}
	
	public void deleteBoard(String email) {
		
	}
}
