import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTableToolbarComponent } from './bi-table-toolbar.component';

describe('BiTableToolbarComponent', () => {
  let component: BiTableToolbarComponent;
  let fixture: ComponentFixture<BiTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiTableToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  	console.log('componenet',component);
    expect(component).toBeTruthy();
  });
});
