import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRentPageComponent } from '../bike-loc-page/bike-loc-page.component';

describe('BikeRentPageComponent', () => {
  let component: BikeRentPageComponent;
  let fixture: ComponentFixture<BikeRentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeRentPageComponent]
    });
    fixture = TestBed.createComponent(BikeRentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
