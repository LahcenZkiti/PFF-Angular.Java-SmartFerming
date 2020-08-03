import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImgComponent } from './list-img.component';

describe('ListImgComponent', () => {
  let component: ListImgComponent;
  let fixture: ComponentFixture<ListImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
