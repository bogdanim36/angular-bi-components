import {TableHelper} from '../table-helper';
import ObjectAssign = TableHelper.ObjectAssign;
import {BiTranslation} from '../../../bi-translation';

export class BiTableColumn {
    field: string;
    id?: string | number;
    headerName: BiTranslation;
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
