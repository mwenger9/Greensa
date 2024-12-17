import { Component, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Import the Router and ActivatedRoute

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  @Input() title: string = '';
  @Input() options: string[] = []; // Array of options
  isOpen = false; // State to manage dropdown visibility
  isHovered = false; // State to manage hover status

  constructor(private router: Router, private route: ActivatedRoute) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Modify the selectOption method to navigate on selection
  selectOption(option: string) {
    console.log('Selected option:', option);
    this.isOpen = false; // Close the dropdown after selection
    
    switch(option) {
      case 'Location de vélos':
        this.router.navigate(['/bike-rent']);
        break;
      case 'Paniers de légumes':
        this.router.navigate(['/vege-basket-command']);
        break;
      case 'Conférences':
        this.router.navigate(['/conf-calendar']);
        break;
      case 'Frip\'INSA':
        this.handleFripInsaOption();
        break;
      default:
        console.log('No route configured for this option');
    }
  }

  // Handle the Frip'INSA logic
  handleFripInsaOption() {
    // Check if we're already on the main page
    const currentRoute = this.router.url;

    if (currentRoute === '/' || currentRoute === '/home') {
      // If we're already on the main page, scroll to the element
      const element = document.getElementById('section4');
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      // If we're not on the main page, navigate there first
      this.router.navigate(['/']).then(() => {
        // After navigation completes, scroll to the element
        setTimeout(() => {
          const element = document.getElementById('section4');
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 300); // Adjust delay if needed to ensure navigation is complete
      });
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.getElementById('dropdown-menu');
    if (this.isOpen && dropdown && !dropdown.contains(target)) {
      this.isOpen = false; // Close the dropdown
    }
  }

  // Mouse event handlers
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
