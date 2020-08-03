import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculSignupComponent } from './agricul-signup.component';

describe('AgriculSignupComponent', () => {
  let component: AgriculSignupComponent;
  let fixture: ComponentFixture<AgriculSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
