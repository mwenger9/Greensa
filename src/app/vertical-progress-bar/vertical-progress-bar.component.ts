import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface Section {
    id: string;
    image: string;
    scrollTop: number;
}

@Component({
    selector: 'app-vertical-progress-bar',
    templateUrl: './vertical-progress-bar.component.html',
    styleUrls: ['./vertical-progress-bar.component.css']
})
export class VerticalProgressBarComponent {
  sections: Section[] = [
    { id: 'section1', image: 'fas fa-angle-double-up', scrollTop: 0 },
    { id: 'section2', image: 'fas fa-bicycle', scrollTop: 500 },
    { id: 'section3', image: 'fas fa-comments', scrollTop: 1000 },
    { id: 'section4', image: 'fas fa-tshirt', scrollTop: 1500 },
    { id: 'section5', image: 'fas fa-address-book', scrollTop: 1700 }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateScrollPositions();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateScrollPositions();
  }

  getOpacity(id: string): number {
    const scrollPosition = window.scrollY;
    const section = this.sections.find(s => s.id === id);
    if (!section) {
      return 0.5;
    }
    if (id === this.sections[this.sections.length - 1].id) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If the user has scrolled to the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight) {
          return 1;
      }
    }
    return section.scrollTop <= scrollPosition ? 1 : 0.5;
  }

  updateScrollPositions() {
    this.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            section.scrollTop = element.getBoundingClientRect().top + window.scrollY;
        }
    });
  }


  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });

        // Delay the opacity update to ensure scroll has completed
        setTimeout(() => {
            this.updateScrollPositions();
        }, 300); // Adjust delay to match scroll animation duration
    }
}
}
