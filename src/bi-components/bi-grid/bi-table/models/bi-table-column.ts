import {TableHelper} from '../table-helper';
import ObjectAssign = TableHelper.ObjectAssign;

export class BiTableColumn {
    field: string;
    id?: string | number;
    headerName: string;
    filter?: string | boolean;
    sortable: boolean;
    width?: number;
    resizable?: boolean;
    pinned?: string;
    type?: string;
    children?: BiTableColumn[];

    constructor(source: Partial<BiTableColumn>) {
        if (source.resizable === undefined) {
            this.resizable = true;
        }
        if (source.filter === undefined) {
            this.filter = true;
        }
        ObjectAssign(this, source);
    }


}
