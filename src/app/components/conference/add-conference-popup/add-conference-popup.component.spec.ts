import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConferencePopupComponent } from './add-conference-popup.component';

describe('AddConferencePopupComponent', () => {
  let component: AddConferencePopupComponent;
  let fixture: ComponentFixture<AddConferencePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConferencePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConferencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
