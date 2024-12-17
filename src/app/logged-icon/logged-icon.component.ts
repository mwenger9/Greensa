import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-icon',
  templateUrl: './logged-icon.component.html',
  styleUrls: ['./logged-icon.component.css']
})
export class LoggedIconComponent {
  isMenuOpen = false;
  userType = sessionStorage.getItem('userType') || 'guest';

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    sessionStorage.setItem('userType', 'guest');
    this.userType = 'guest';
    this.isMenuOpen = false;
    
    window.location.reload();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Check if the click is outside the menu component
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.changeDetectorRef.detectChanges();
    }
  }
}
