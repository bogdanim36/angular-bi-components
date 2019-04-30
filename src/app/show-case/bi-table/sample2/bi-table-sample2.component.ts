import {Component} from '@angular/core';
import {BiTableColumn} from '../../../../bi-components/bi-grid/bi-table/models/bi-table-column';
import {AppService} from '../../../app-service/app.service';

@Component({
    selector: 'app-sample2',
    templateUrl: './bi-table-sample2.component.html',
    styleUrls: ['./bi-table-sample2.component.css']
})
export class BiTableSample2Component {

    data: Array<any>;
    columns: Partial<BiTableColumn>[];

    constructor(private service: AppService) {
        this.data = service.data;
        this.columns = service.columns;
    }

}
