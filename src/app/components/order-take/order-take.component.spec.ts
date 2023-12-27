import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTakeComponent } from './order-take.component';

describe('OrderSummaryComponent', () => {
  let component: OrderTakeComponent;
  let fixture: ComponentFixture<OrderTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderTakeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTakeComponent);
    component = fixture.componentInstance;
    +fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
