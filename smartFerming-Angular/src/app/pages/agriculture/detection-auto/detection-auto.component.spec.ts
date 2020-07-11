import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionAutoComponent } from './detection-auto.component';

describe('DetectionAutoComponent', () => {
  let component: DetectionAutoComponent;
  let fixture: ComponentFixture<DetectionAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
