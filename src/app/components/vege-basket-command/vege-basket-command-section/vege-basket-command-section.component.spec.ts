import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeBasketCommandSectionComponent } from './vege-basket-command-section.component';

describe('VegeBasketCommandSectionComponent', () => {
  let component: VegeBasketCommandSectionComponent;
  let fixture: ComponentFixture<VegeBasketCommandSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegeBasketCommandSectionComponent]
    });
    fixture = TestBed.createComponent(VegeBasketCommandSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
