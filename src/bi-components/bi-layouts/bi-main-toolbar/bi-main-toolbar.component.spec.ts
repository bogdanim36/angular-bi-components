import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BiMainToolbarComponent} from './bi-main-toolbar.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {AppService} from '@app/app-service/app.service';

describe('BiMainToolbarComponent', () => {
    let component: BiMainToolbarComponent;
    let fixture: ComponentFixture<BiMainToolbarComponent>;
    let service: AppService;
    let element: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BiMainToolbarComponent],
            providers: [AppService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BiMainToolbarComponent);
        component = fixture.componentInstance;
        service = fixture.debugElement.injector.get(AppService);
        element = fixture.debugElement;
        component.appTitle = service.appTitle;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should show contain appTitle', () => {
        const nativeElement = element.query(By.css('bi-main-toolbar> .app-name')).nativeElement;
        const expectedValue = service.appTitle;
        expect(nativeElement.innerHTML).toBe(expectedValue);
    });

});
