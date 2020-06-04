import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExpertComponent } from './navigation-expert.component';

describe('NavigationExpertComponent', () => {
  let component: NavigationExpertComponent;
  let fixture: ComponentFixture<NavigationExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
