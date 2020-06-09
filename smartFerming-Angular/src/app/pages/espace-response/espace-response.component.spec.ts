import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceResponseComponent } from './espace-response.component';

describe('EspaceResponseComponent', () => {
  let component: EspaceResponseComponent;
  let fixture: ComponentFixture<EspaceResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
