import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Member, Login } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  // add member
  add(member:Member) {
    
    var url = "http://localhost:8090/cryptocurrency/memberAdd";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, member, httpOptions);
  }

  // login
  login(login:Login) {
    var url = "http://localhost:8090/cryptocurrency/login";

    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type':'application/json'
        ,'Access-Control-Allow-Origin':'*' 
        }
      )
    };

    return this.http.post(url, login, httpOptions);
  }
}
