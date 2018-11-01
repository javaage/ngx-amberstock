import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDeltaComponent } from './index-delta.component';

describe('IndexDeltaComponent', () => {
  let component: IndexDeltaComponent;
  let fixture: ComponentFixture<IndexDeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
