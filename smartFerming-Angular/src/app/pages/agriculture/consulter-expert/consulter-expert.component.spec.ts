import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterExpertComponent } from './consulter-expert.component';

describe('ConsulterExpertComponent', () => {
  let component: ConsulterExpertComponent;
  let fixture: ComponentFixture<ConsulterExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
