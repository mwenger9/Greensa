import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeBasketCommandPageComponent } from './vege-basket-command-page.component';

describe('VegeBasketCommandPageComponent', () => {
  let component: VegeBasketCommandPageComponent;
  let fixture: ComponentFixture<VegeBasketCommandPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegeBasketCommandPageComponent]
    });
    fixture = TestBed.createComponent(VegeBasketCommandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
