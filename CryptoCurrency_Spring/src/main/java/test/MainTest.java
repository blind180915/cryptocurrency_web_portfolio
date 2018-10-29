package test;

import java.io.IOException;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;

public class MainTest {
//	static String BASE_URL_F = "https://www.giordano.co.kr/Product/?Param1=2&Param2=";
//	static String BASE_URL_B = "&refresh_start=0";
//	static int BASE_URL_PAGE = 67;
//	static String COMPLETE_URL = BASE_URL_F + BASE_URL_B + BASE_URL_PAGE;
	static String COMPLETE_URL = "http://cointalk.co.kr/bbs/board.php?bo_table=beginner&wr_id=";
	
	public static void main(String[] args) throws IOException{
		int start = 11330;
		int temp;
		for(int i = 0; i < 1; ++i) {
			temp = start + i;
			System.out.println(COMPLETE_URL + String.valueOf(temp));
			System.out.println("//////////////////////////////////////////////////////////start");
			Document doc = Jsoup.connect(COMPLETE_URL + String.valueOf(temp)).get();
			System.out.println(doc.text());
			Elements subject = doc.select("#st-view .subject");
			System.out.println(subject.text().length());

			
			for(int j = 0; j < subject.text().length(); ++j) {
				System.out.println(subject.text().charAt(j) + ", " + (int)subject.text().charAt(j));
			}
			Elements content = doc.select("#st-view .content p");
//			System.out.println(content.text());
//			for(int j = 0; j < content.text().length(); ++j) {
//				System.out.println(content.text().charAt(j) + ", " + (int)content.text().charAt(j));
//			}
			System.out.println("//////////////////////////////////////////////////////////end");
//			System.out.println(doc);
		}
//		Document doc = Jsoup.connect(COMPLETE_URL).get();
////		System.out.println(doc);
//		Elements subject = doc.select("#st-view .subject");
//		System.out.println(subject.text());
//		Elements content = doc.select("#st-view .content");
//		System.out.println(content);
//		Elements subject = doc.select(".product01 .subject");
//		Elements money = doc.select(".product01 .money");
//		String str = subject.text();
//		String str1 = money.text();
//		System.out.println(str);
//		System.out.println(str1);
	}
}
