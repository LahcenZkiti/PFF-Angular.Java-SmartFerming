import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseExpertComponent } from './response-expert.component';

describe('ResponseExpertComponent', () => {
  let component: ResponseExpertComponent;
  let fixture: ComponentFixture<ResponseExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
