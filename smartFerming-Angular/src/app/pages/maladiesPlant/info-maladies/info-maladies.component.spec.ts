import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMaladiesComponent } from './info-maladies.component';

describe('InfoMaladiesComponent', () => {
  let component: InfoMaladiesComponent;
  let fixture: ComponentFixture<InfoMaladiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMaladiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMaladiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
