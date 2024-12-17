import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from "../../../models/conference";
import { ConferenceProvider } from 'src/app/services/conference-provider/conference-provider';
import AOS from 'aos';

@Component({
  selector: 'app-conference-section',
  templateUrl: './conference-section.component.html',
  styleUrls: ['./conference-section.component.css']
})
export class ConferenceSectionComponent {
  nb_displayed_conference : number = 3;
  displayed_conferences : Conference[] = ConferenceProvider.getConferenceDatas(this.nb_displayed_conference);

  constructor(private router: Router) {}

  ngAfterViewInit() {
    AOS.init({
        duration: 1000, // Global duration for animations
        once: true,     // Ensures animations trigger only once
    });
}

  // Go to conference page with that conference selected
  goToConference(date : Date) {
    if (!ConferenceProvider.isConferenceDate(date)) 
      return;
    this.router.navigate(['/conf-calendar'], { queryParams: { date: date }});
  }

  // Redirect to the conference page with the next conference date.
  // If no upcoming conferences, it redirect to today
  goToNextConference() {
    const nextDate = ConferenceProvider.getNextConferenceDate();
    if (nextDate) {
      this.router.navigate(['/conf-calendar'], { queryParams: { date: nextDate } });
    } else {
      this.goToToday();
    }
  }

  // Redirect to today's date on the conference page
  goToToday() {
    const today = new Date();
    this.router.navigate(['/conf-calendar'], { queryParams: { date: today } });
  }
}
