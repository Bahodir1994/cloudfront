import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpAppealsComponent } from './tp-appeals.component';

describe('TpAppealsComponent', () => {
  let component: TpAppealsComponent;
  let fixture: ComponentFixture<TpAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpAppealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
