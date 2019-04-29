import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {BiGridComponent} from './bi-grid.component';
import {BiTableComponent} from './bi-table/bi-table.component';
import {BiTableToolbarComponent} from './bi-table/bi-table-toolbar/bi-table-toolbar.component';
import {BiTableColumnDirective} from './bi-table/bi-table-column.directive';
import {BiTableBodyCellComponent} from './bi-table/bi-table-body-cell/bi-table-body-cell.component';


@NgModule({
    entryComponents: [
        BiTableComponent,
        BiTableToolbarComponent,
    ],
    declarations: [
        BiTableColumnDirective,
        BiGridComponent,
        BiTableComponent,
        BiTableToolbarComponent,
        BiTableBodyCellComponent,
    ],
    providers: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
    ],
    exports: [
        BiTableColumnDirective,
        BiTableToolbarComponent,
        BiTableComponent,
        BiGridComponent,
    ]
})

export class BiGridModule {
}
