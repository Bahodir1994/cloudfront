import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpOrderComponent } from './tp-order.component';

describe('TpOrderComponent', () => {
  let component: TpOrderComponent;
  let fixture: ComponentFixture<TpOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
