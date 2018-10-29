import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Board } from './board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http:HttpClient) { }

  // addBoard
  addBoard(board:Board) {
    
    var url = "http://localhost:8090/addBoard";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };
    return this.http.post(url, board, httpOptions);
  }

  // listBoard
  listBoard():Observable<Board[]> {
    var url = "http://localhost:8090/listBoard";

    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res as Board[];
    }));
  }

  // getBoard
  getBoard(num):Observable<Board> {
    var url = `http://localhost:8090/getBoard/${num}`;

    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res as Board;
    }));
  }

  // addBoard
  addCrawlingBoard(board:Board) {
    
    var url = "http://localhost:8090/addCrawlingBoard";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };
    return this.http.post(url, board, httpOptions);
  }

  crawlingBoard():Observable<Board[]> {
    var url = "http://localhost:8090/crawlingBoard";

    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res as Board[];
    }));
  }
}
