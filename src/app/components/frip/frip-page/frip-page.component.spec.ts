import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FripPageComponent } from './frip-page.component';

describe('FripPageComponent', () => {
  let component: FripPageComponent;
  let fixture: ComponentFixture<FripPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FripPageComponent]
    });
    fixture = TestBed.createComponent(FripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
