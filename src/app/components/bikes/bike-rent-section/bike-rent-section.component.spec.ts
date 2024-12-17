import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRentSectionComponent } from '../bike-rent-section/bike-rent-section.component';

describe('BikeRentSectionComponent', () => {
  let component: BikeRentSectionComponent;
  let fixture: ComponentFixture<BikeRentSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeRentSectionComponent]
    });
    fixture = TestBed.createComponent(BikeRentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
