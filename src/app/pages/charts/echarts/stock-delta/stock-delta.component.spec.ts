import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDeltaComponent } from './stock-delta.component';

describe('StockDeltaComponent', () => {
  let component: StockDeltaComponent;
  let fixture: ComponentFixture<StockDeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
