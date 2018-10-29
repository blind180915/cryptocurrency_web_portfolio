import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BoardService } from '../../services/board/board.service';
import { Board } from '../../services/board/board';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor(private service:BoardService) {}

    ngOnInit() {}

    save(title, contents) {
        console.log(title, localStorage.getItem('login_email'), contents);
        this.service.addBoard(new Board(0, title, localStorage.getItem('login_email'), 0, null, contents))
                    .subscribe(res => { 
                        console.log(res);
                    }, error => { console.log(error)});
        location.href = '/tables';
    }
}
