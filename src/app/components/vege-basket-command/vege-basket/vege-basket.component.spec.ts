import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeBasketComponent } from './vege-basket.component';

describe('VegeBasketComponent', () => {
  let component: VegeBasketComponent;
  let fixture: ComponentFixture<VegeBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegeBasketComponent]
    });
    fixture = TestBed.createComponent(VegeBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
