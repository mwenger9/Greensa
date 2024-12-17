import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FripSectionComponent } from './frip-section.component';

describe('FripSectionComponent', () => {
  let component: FripSectionComponent;
  let fixture: ComponentFixture<FripSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FripSectionComponent]
    });
    fixture = TestBed.createComponent(FripSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
