import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conference } from 'src/app/models/conference';
import { ConferenceProvider } from 'src/app/services/conference-provider/conference-provider';

@Component({
  selector: 'app-conference-page',
  templateUrl: './conference-page.component.html',
  styleUrls: ['./conference-page.component.css']
})
export class ConferencePageComponent implements OnInit {
  // Get access to all conferences data
  conferences : Conference[] = ConferenceProvider.getConferenceDatas();

  // Tell which index of the timeline is selected 
  selectedIndex = 0;

  // Manage the access to the adding button
  isAdmin : boolean = sessionStorage.getItem('userType') === 'admin';
  // Manage delete mode state
  isDeleteMode: boolean = false;

  // Manage a popup to add the bikes
  isPopupVisible: boolean = false;

  constructor(private route: ActivatedRoute) {}
  // Trigger when this components is init <=> search for parameters in the route query (date, alert)
  ngOnInit(): void {
    // Subscribe to query parameters to retrieve the date
    this.route.queryParams.subscribe(params => {
      const dateParam : Date = params['date'];
      if (!dateParam)
        return;
      else
        this.selectConference(ConferenceProvider.getConferenceIndex(dateParam))
    });
  }

  // popup stuff
  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  // conference stuff
  get selectedConference() {
    return this.conferences[this.selectedIndex];
  }
  selectConference(index: number): void {
    if (index >= 0)
      this.selectedIndex = index;
  }

  getSpotPosition(index: number): number {
    // Distribute spots evenly along the bar (0% to 100%)
    return (index / (this.conferences.length - 1)) * 100;
  }
  
  addConference(newConf: Conference) {
    ConferenceProvider.addConference(newConf);
    // Update the binding list
    this.conferences = ConferenceProvider.getConferenceDatas();
    this.isPopupVisible = false;
  }

  toggleDeleteMode() {
    this.isDeleteMode = !this.isDeleteMode;
  }

  deleteConference(conf: Conference) {
    ConferenceProvider.removeConference(conf);
    this.conferences = ConferenceProvider.getConferenceDatas();
    this.isDeleteMode = false;  // Exit delete mode after deleting
  }
}
