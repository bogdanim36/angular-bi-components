import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    ContentChildren,
    Input,
    OnChanges,
    OnInit,
    QueryList,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {BiTableColumnDirective} from './bi-table-column.directive';

@Component({
    selector: 'bi-table',
    templateUrl: './bi-table.component.html',
    styleUrls: ['./bi-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BiTableComponent implements OnInit, OnChanges, AfterContentInit {
    def: {
        columns?: BiTableColumnDirective[],
    };
    @Input() data: Array<any>;
    @Input() master: boolean;
    @ContentChildren(BiTableColumnDirective) columnsTemplates: QueryList<BiTableColumnDirective>;
    componentsToLoad: Array<string>;

    constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
        this.master = true;
        this.componentsToLoad = ['topToolbar'];
        this.def = {};
        this.data = [];
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        if (this.columnsTemplates) {
            this.def.columns = this.columnsTemplates.map((column: BiTableColumnDirective) => {
                return column;
            });
            console.log('this.def', this.def.columns);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.def) {
            console.log('table def changed', changes.def);
        }
    }

    testClick(event) {
        console.log('test click', arguments);
    }
}
