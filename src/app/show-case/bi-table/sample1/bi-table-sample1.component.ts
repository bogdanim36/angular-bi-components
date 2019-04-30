import {Component, OnInit} from '@angular/core';
import {BiTableColumn} from '../../../../bi-components/bi-grid/bi-table/models/bi-table-column';
import {AppService} from '../../../app-service/app.service';

@Component({
    selector: 'app-sample1',
    templateUrl: './bi-table-sample1.component.html',
    styleUrls: ['./bi-table-sample1.component.css'],
    providers:[AppService]
})
export class BiTableSample1Component {

    data: Array<any>;
    columns: Partial<BiTableColumn>[];

    constructor(private service: AppService) {
        this.data = service.data;
        this.columns = service.columns;
    }

}
