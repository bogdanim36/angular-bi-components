import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiSideMenuComponent } from './bi-side-menu.component';

describe('BiSideMenuComponent', () => {
  let component: BiSideMenuComponent;
  let fixture: ComponentFixture<BiSideMenuComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [ BiSideMenuComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(BiSideMenuComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
