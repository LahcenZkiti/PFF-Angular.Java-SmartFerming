import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceExpertComponent } from './espace-expert.component';

describe('EspaceExpertComponent', () => {
  let component: EspaceExpertComponent;
  let fixture: ComponentFixture<EspaceExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
