import {Component} from '@angular/core';
import {BiTableColumn} from '../bi-components/bi-grid/bi-table/models/bi-table-column';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular BiComponents';
    data: Array<any>;
    columns: Partial<BiTableColumn>[];

    constructor() {
        this.data = [
            {id: 1, name: 'Test1', description: 'aafgsdhdfjdgkfkl'},
            {id: 2, name: 'Test2', description: 'sddgsdfgjgfhxdkchgfkl'},
            {id: 3, name: 'Test3', description: 'ddfsghjdgisdrtwywse'}
        ];
        this.columns = [
            {id: 1, field: 'id', headerName: 'Id'},
            {id: 2, field: 'name', headerName: 'Id'},
            {id: 3, field: 'description', headerName: 'Description'},
        ];
    }
}
