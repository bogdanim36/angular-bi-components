import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiGridComponent } from './bi-grid.component';

describe('BiGridComponent', () => {
  let component: BiGridComponent;
  let fixture: ComponentFixture<BiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
