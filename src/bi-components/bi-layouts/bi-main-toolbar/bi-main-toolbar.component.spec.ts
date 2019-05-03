import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiMainToolbarComponent } from './bi-main-toolbar.component';

describe('BiMainToolbarComponent', () => {
  let component: BiMainToolbarComponent;
  let fixture: ComponentFixture<BiMainToolbarComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [ BiMainToolbarComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(BiMainToolbarComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
