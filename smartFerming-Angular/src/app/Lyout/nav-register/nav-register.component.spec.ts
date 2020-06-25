import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegisterComponent } from './nav-register.component';

describe('NavRegisterComponent', () => {
  let component: NavRegisterComponent;
  let fixture: ComponentFixture<NavRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
