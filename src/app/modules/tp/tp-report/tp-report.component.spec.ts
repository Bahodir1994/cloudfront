import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpReportComponent } from './tp-report.component';

describe('TpReportComponent', () => {
  let component: TpReportComponent;
  let fixture: ComponentFixture<TpReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
