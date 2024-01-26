import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpCatalogComponent } from './tp-catalog.component';

describe('TpCatalogComponent', () => {
  let component: TpCatalogComponent;
  let fixture: ComponentFixture<TpCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
