import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedIconComponent } from './logged-icon.component';

describe('LoggedIconComponent', () => {
  let component: LoggedIconComponent;
  let fixture: ComponentFixture<LoggedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
