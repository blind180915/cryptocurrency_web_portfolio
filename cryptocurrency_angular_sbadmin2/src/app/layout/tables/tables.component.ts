import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BoardService } from '../../services/board/board.service';
import { Board } from '../../services/board/board';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor(private service:BoardService) {}

    arrBoard:Board[];

    ngOnInit() {
        this.listBoard();
    }

    listBoard() {
        this.service.listBoard().subscribe(res=>{
            console.log(res);
            this.arrBoard = res;
            var length = this.arrBoard.length;
            for(var i = 0; i < length - 1; ++i) {
                for(var j = i + 1; j < length; ++j) {
                    if(this.arrBoard[i].num < this.arrBoard[j].num) {
                        var temp = this.arrBoard[i];
                        this.arrBoard[i] = this.arrBoard[j];
                        this.arrBoard[j] = temp;
                    }
                }
            }
        }, error=>{
            console.log(error);
        });
    }

    crawling() {
        console.log('crawling');
        var _service = this.service;
        this.service.crawlingBoard().subscribe(res=>{
            res.forEach(function(value){
                _service.addCrawlingBoard(value).subscribe(res=>{
                    console.log(res);
                }, error=>{
                    console.log(error);
                });
            });
            
        }, error=>{
            console.log(error);
        });
    }
}
