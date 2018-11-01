import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularQueryComponent } from './popular-query.component';

describe('PopularQueryComponent', () => {
  let component: PopularQueryComponent;
  let fixture: ComponentFixture<PopularQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
