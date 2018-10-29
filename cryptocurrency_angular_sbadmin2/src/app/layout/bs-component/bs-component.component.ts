import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board/board.service';
import { Board } from '../../services/board/board';

@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
    constructor(private route: ActivatedRoute, private service:BoardService) {}
    board:Board;
    ngOnInit() {
        this.service.getBoard(this.route.snapshot.paramMap.get('num')).subscribe(res=>{
            console.log(res);
            this.board = res;
        }, error=>{
            console.log(error);
        });
    }


}
