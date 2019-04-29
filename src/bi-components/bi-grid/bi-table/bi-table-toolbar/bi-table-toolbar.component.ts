import {Component, Input} from '@angular/core';

@Component({
    selector: 'bi-table-toolbar',
    templateUrl: './bi-table-toolbar.component.html',
    styleUrls: ['./bi-table-toolbar.component.scss']
})
export class BiTableToolbarComponent {
    @Input() top = false;
    @Input() bottom = false;

    constructor() {
    }
}
