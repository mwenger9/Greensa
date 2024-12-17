import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-bike-rent-section',
  templateUrl: './bike-rent-section.component.html',
  styleUrls: ['./bike-rent-section.component.css']
})
export class BikeRentSectionComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Trigger animation only once
    });
}
}


