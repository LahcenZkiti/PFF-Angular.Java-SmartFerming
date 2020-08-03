import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSignupComponent } from './expert-signup.component';

describe('ExpertSignupComponent', () => {
  let component: ExpertSignupComponent;
  let fixture: ComponentFixture<ExpertSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
