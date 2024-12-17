import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conference } from 'src/app/models/conference';
import { ConferenceProvider } from 'src/app/services/conference-provider/conference-provider';

@Component({
  selector: 'app-conference-calendar',
  templateUrl: './conference-calendar.component.html',
  styleUrl: './conference-calendar.component.css'
})
export class ConferenceCalendarComponent implements OnInit {
  // Warn the user is there's no upcoming conference
  noUpConfWarning : boolean = false;
  // The selected date
  selectedDate : Date = new Date();
  // Tell if the selected date is a conference date [null by default]
  selectedConference: Conference | null = null;
  //selectedConference: Conference | null = this.conferenceDatas[0];

  constructor(private route: ActivatedRoute) {}
  // Trigger when this components is init <=> search for parameters in the route query (date, alert)
  ngOnInit(): void {
    // Subscribe to query parameters to retrieve the date
    this.route.queryParams.subscribe(params => {
      const dateParam : Date = params['date'];
      if (!dateParam) {
        return;
      }
      else {
        this.selectedDate = new Date(dateParam);
        // Update the vue if a conference date is selected
        this.onDateSelected(this.selectedDate);
      }

      this.noUpConfWarning = params['noUpcomingConference'] === 'true';
    });
  }
  // Trigger after this components view init <=> search for parameters in the route query (alert)
  ngAfterViewInit(): void {
    // Check if the no upcoming conference must be shown
    if (this.noUpConfWarning) {
      setTimeout(() => {
        alert("No upcoming conferences... Showing today's date.");
      });
    }
  }

  // Method called when a date is selected
  onDateSelected(date: Date | null): void {
    if (!date)
      return;
    // Check if the selected date has a conference and set selectedConference accordingly
    this.selectedConference = ConferenceProvider.getConferenceDate(date);
  }

  highlightConferenceDates = (date: Date): string => {
    return ConferenceProvider.isConferenceDate(date) ? 'conference-date' : '';
  };
}
