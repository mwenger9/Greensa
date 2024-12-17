import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePageComponent } from './conference-page.component';

describe('ConferencePageComponent', () => {
  let component: ConferencePageComponent;
  let fixture: ComponentFixture<ConferencePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConferencePageComponent]
    });
    fixture = TestBed.createComponent(ConferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
