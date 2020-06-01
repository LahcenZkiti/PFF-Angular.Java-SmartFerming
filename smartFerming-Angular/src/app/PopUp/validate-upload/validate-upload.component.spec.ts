import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateUploadComponent } from './validate-upload.component';

describe('ValidateUploadComponent', () => {
  let component: ValidateUploadComponent;
  let fixture: ComponentFixture<ValidateUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
