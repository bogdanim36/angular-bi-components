import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiTreeMenuComponent } from './bi-tree-menu.component';

describe('BiTreeMenuComponent', () => {
  let component: BiTreeMenuComponent;
  let fixture: ComponentFixture<BiTreeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiTreeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiTreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
