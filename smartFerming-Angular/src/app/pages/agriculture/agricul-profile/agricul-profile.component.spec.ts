import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculProfileComponent } from './agricul-profile.component';

describe('AgriculProfileComponent', () => {
  let component: AgriculProfileComponent;
  let fixture: ComponentFixture<AgriculProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
