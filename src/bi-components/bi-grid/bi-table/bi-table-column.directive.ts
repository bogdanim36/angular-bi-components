import {Directive, Input, TemplateRef} from '@angular/core';
import {BiTableColumn} from './models/bi-table-column';

@Directive({
    selector: 'bi-table-column',
})

export class BiTableColumnDirective {
    @Input() def: Partial<BiTableColumn>;
    // tslint:disable-next-line:no-input-rename
    @Input('viewTemplate') viewTemplate: TemplateRef<any>;
}
