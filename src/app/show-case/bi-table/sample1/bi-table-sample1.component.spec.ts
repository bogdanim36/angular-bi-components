import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BiTableSample1Component} from './bi-table-sample1.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AppService} from '../../../app-service/app.service';
import {BiTableComponent} from '../../../../bi-components/bi-grid/bi-table/bi-table.component';
import {BiTableColumnDirective} from '../../../../bi-components/bi-grid/bi-table/bi-table-column.directive';
import {BiTableBodyCellComponent} from '../../../../bi-components/bi-grid/bi-table/bi-table-body-cell/bi-table-body-cell.component';
import {BiTableToolbarComponent} from '../../../../bi-components/bi-grid/bi-table/bi-table-toolbar/bi-table-toolbar.component';

describe('BiTableSample1Component', () => {
    let component: BiTableSample1Component;
    let fixture: ComponentFixture<BiTableSample1Component>;
    let service: AppService;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BiTableSample1Component,
                BiTableComponent,
                BiTableColumnDirective,
                BiTableBodyCellComponent,
                BiTableToolbarComponent],
            providers: [AppService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BiTableSample1Component);
        service = fixture.debugElement.injector.get(AppService);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        component.data = service.data;
        component.columns = service.columns;
        fixture.detectChanges();
    });

    it('should create componenet', () => {
        expect(component).toBeTruthy();
    });
    it('should create service', () => {
        expect(service).toBeTruthy();
    });
    it('should show table header', () => {
        const nativeElement = element.query(By.css('bi-table>table>thead>tr')).nativeElement;
        const expectedValue = `<!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><th style="border:none !important">Id</th><th style="border:none !important">Id</th><th style="border:none !important">Description</th>`;
        expect(nativeElement.innerHTML).toBe(expectedValue);
    });
});
