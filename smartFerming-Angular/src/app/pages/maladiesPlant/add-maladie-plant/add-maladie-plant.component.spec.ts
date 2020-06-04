import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaladiePlantComponent } from './add-maladie-plant.component';

describe('AddMaladiePlantComponent', () => {
  let component: AddMaladiePlantComponent;
  let fixture: ComponentFixture<AddMaladiePlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaladiePlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaladiePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
