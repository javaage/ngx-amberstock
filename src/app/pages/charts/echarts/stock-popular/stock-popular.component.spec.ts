import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPopularComponent } from './stock-popular.component';

describe('StockPopularComponent', () => {
  let component: StockPopularComponent;
  let fixture: ComponentFixture<StockPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
