import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListesComponent } from './product-listes.component';

describe('ProductListesComponent', () => {
  let component: ProductListesComponent;
  let fixture: ComponentFixture<ProductListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
