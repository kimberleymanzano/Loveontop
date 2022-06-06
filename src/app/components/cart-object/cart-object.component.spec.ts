import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartObjectComponent } from './cart-object.component';

describe('CartObjectComponent', () => {
  let component: CartObjectComponent;
  let fixture: ComponentFixture<CartObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
