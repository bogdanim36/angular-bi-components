import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTableComponent } from './bi-table.component';

describe('BiTableComponent', () => {
  let component: BiTableComponent;
  let fixture: ComponentFixture<BiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
