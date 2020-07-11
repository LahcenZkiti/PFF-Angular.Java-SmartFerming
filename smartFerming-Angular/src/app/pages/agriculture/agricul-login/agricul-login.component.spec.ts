import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculLoginComponent } from './agricul-login.component';

describe('AgriculLoginComponent', () => {
  let component: AgriculLoginComponent;
  let fixture: ComponentFixture<AgriculLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
