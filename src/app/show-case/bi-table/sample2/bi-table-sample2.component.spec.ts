import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTableSample2Component } from './bi-table-sample2.component';

describe('BiTableSample2Component', () => {
  let component: BiTableSample2Component;
  let fixture: ComponentFixture<BiTableSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiTableSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTableSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
