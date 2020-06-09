import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterImgageComponent } from './traiter-imgage.component';

describe('TraiterImgageComponent', () => {
  let component: TraiterImgageComponent;
  let fixture: ComponentFixture<TraiterImgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterImgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterImgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
