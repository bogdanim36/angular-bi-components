import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BiTableColumnDirective} from '../bi-table-column.directive';

@Component({
    selector: 'bi-table-body-cell',
    templateUrl: './bi-table-body-cell.component.html',
    styleUrls: ['./bi-table-body-cell.component.scss']
})
export class BiTableBodyCellComponent implements OnInit {
    @Input() templateRef: TemplateRef<any>;
    @Input() rowData: any;
    @Input() column: BiTableColumnDirective;

    constructor() {
    }

    ngOnInit() {
    }

}
