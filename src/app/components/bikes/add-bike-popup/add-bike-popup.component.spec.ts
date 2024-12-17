import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBikePopupComponent } from './add-bike-popup.component';

describe('AddBikePopupComponent', () => {
  let component: AddBikePopupComponent;
  let fixture: ComponentFixture<AddBikePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBikePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBikePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
