import { Component } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikeProviderService } from 'src/app/services/bike-provider/bike-provider.service';

@Component({
  selector: 'app-bike-rent-page',
  templateUrl: './bike-rent-page.component.html',
  styleUrls: ['./bike-rent-page.component.css']
})
export class BikeRentPageComponent {

  // Get access to the bikes data
  bikes : Bike[] = BikeProviderService.getBikesData();

  // Manage the access to the adding button
  isAdmin : boolean = sessionStorage.getItem('userType') === 'admin';
  // Manage delete mode state
  isDeleteMode: boolean = false;

  // Manage a popup to add the bikes
  isPopupVisible: boolean = false;
  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  addBike(newBike: Bike) {
    BikeProviderService.addBike(newBike);
    // Update the binding list
    this.bikes = BikeProviderService.getBikesData();
    this.isPopupVisible = false;
  }

  toggleDeleteMode() {
    this.isDeleteMode = !this.isDeleteMode;
  }

  deleteBike(bike: Bike) {
    BikeProviderService.removeBike(bike);
    this.bikes = BikeProviderService.getBikesData();
    this.isDeleteMode = false;  // Exit delete mode after deleting
  }
}
