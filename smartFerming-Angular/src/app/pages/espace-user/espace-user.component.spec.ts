import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceUserComponent } from './espace-user.component';

describe('EspaceUserComponent', () => {
  let component: EspaceUserComponent;
  let fixture: ComponentFixture<EspaceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
