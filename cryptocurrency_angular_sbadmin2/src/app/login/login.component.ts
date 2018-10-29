import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { MemberService } from '../services/member/member.service';
import { Login } from '../services/member/member';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private service:MemberService) {}

    isWarning:boolean;
    warningText:string;

    ngOnInit() {
        this.isWarning = false;
        this.warningText = '';
    }

    onLoggedin(event, email, passwd) {
        this.service.login(new Login(email, passwd)).subscribe(res => { 
            if(res == null) {
                this.isWarning = true;
                this.warningText = '아이디 또는 비밀번호가 틀립니다.'
            } else {
                localStorage.setItem('login', res['full_name']);
                localStorage.setItem('login_email', res['email']);
                location.href = '/';
            }
            console.log(res);
        }, error => { console.log(error)});
    }
}