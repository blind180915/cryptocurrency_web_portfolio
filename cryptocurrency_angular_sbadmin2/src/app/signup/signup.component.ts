import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { MemberService } from '../services/member/member.service';
import { Member } from '../services/member/member';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private service:MemberService) {}

    isWarning:boolean;
    warningText:string;
    isDanger:boolean;
    dangerText:string;

    ngOnInit() {
       this.isWarning = false;
       this.warningText = '';
       this.isDanger = false;
       this.dangerText = '';
    }

    checkData(data, text) {
        if(data === '') {
            this.isWarning = true;
            this.warningText = text + ' 입력해 주세요.';
            return false;
        }
        return true;
    }

    onRegister(event, full_name, email, passwd, passwd2) {
        let isAdd = false;

        if(this.checkData(full_name, '이름을') && this.checkData(email, '이메일을') &&
           this.checkData(passwd, '비밀번호를') && this.checkData(passwd2, '비밀번호를 다시')) {
            isAdd = true;
            this.isWarning = false;
            this.warningText = '';
        }

        if(passwd !== passwd2) {
            isAdd = false;
            this.isDanger = true;
            this.dangerText = '비밀번호가 다릅니다.'
        }

        if(isAdd) {
            this.service.add(new Member(email, full_name, passwd))
                .subscribe(res => {console.log(res);}, 
                           error => {console.log(error);})
        } else {
            event.preventDefault();
        }
    }
}
