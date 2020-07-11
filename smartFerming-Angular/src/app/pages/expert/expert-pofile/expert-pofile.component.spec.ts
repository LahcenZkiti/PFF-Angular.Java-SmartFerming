import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPofileComponent } from './expert-pofile.component';

describe('ExpertPofileComponent', () => {
  let component: ExpertPofileComponent;
  let fixture: ComponentFixture<ExpertPofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertPofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
