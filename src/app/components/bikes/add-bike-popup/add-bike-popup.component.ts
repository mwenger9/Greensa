import { Component, EventEmitter, Output } from '@angular/core';
import { Bike } from 'src/app/models/bike';

import { DragNDropService } from 'src/app/services/drag-n-drop/drag-n-drop.service';
import { StringGuardService } from 'src/app/services/string-guard/string-guard.service';

@Component({
  selector: 'app-add-bike-popup',
  templateUrl: './add-bike-popup.component.html',
  styleUrl: './add-bike-popup.component.css'
})
export class AddBikePopupComponent {
  @Output() close = new EventEmitter<void>(); // Event to close the modal
  @Output() addBike = new EventEmitter<Bike>();

  public constructor(protected dragndrop : DragNDropService) {}
  
  bikeName : string = '';
  bikeImg : string = '';
  bikeDescription : string = '';

  addNewBike() {
    // guards
    if (!StringGuardService.isStringValid(this.bikeName)) { 
      alert("A correct bike name should be provided");
      return; 
    }
    if (!StringGuardService.isStringValid(this.bikeImg) || !StringGuardService.hasValidExt(this.bikeImg, [ "png", "jpg" ])) {
      alert("A correct image name should be provided");
      return; 
    }

    // Clear the input fields after emitting
    this.addBike.emit({ name: this.bikeName, imagePath: this.bikeImg, description: this.bikeDescription });
    this.bikeName = '';
    this.bikeImg = '';
    this.bikeDescription = '';
  }

  closePopup() {
    this.close.emit(); // Emit event to close the popup
  }
}
