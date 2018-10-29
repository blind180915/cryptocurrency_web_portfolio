import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() image: string;
    @Input() color: string;
    @Input() label: string;

    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}
}
