import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllindexComponent } from './allindex.component';

describe('AllindexComponent', () => {
  let component: AllindexComponent;
  let fixture: ComponentFixture<AllindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
