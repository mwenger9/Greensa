import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceCalendarComponent } from './conference-calendar.component';

describe('ConferenceCalendarComponent', () => {
  let component: ConferenceCalendarComponent;
  let fixture: ComponentFixture<ConferenceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferenceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
