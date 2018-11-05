import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCompareComponent } from './index-compare.component';

describe('IndexCompareComponent', () => {
  let component: IndexCompareComponent;
  let fixture: ComponentFixture<IndexCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
