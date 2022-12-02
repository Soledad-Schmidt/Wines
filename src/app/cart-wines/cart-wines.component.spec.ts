import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWinesComponent } from './cart-wines.component';

describe('CartWinesComponent', () => {
  let component: CartWinesComponent;
  let fixture: ComponentFixture<CartWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartWinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
