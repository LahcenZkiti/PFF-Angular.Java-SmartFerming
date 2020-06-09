import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaladiePlantComponent } from './list-maladie-plant.component';

describe('ListMaladiePlantComponent', () => {
  let component: ListMaladiePlantComponent;
  let fixture: ComponentFixture<ListMaladiePlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaladiePlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaladiePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
