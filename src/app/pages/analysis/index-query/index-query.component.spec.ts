import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexQueryComponent } from './index-query.component';

describe('IndexQueryComponent', () => {
  let component: IndexQueryComponent;
  let fixture: ComponentFixture<IndexQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
