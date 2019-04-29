import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTableBodyCellComponent } from './bi-table-body-cell.component';

describe('BiTableBodyCellComponent', () => {
  let component: BiTableBodyCellComponent;
  let fixture: ComponentFixture<BiTableBodyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiTableBodyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTableBodyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
