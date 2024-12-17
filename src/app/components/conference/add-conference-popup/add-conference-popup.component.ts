import { Component, EventEmitter, Output } from '@angular/core';
import { Conference } from 'src/app/models/conference';

import { DragNDropService } from 'src/app/services/drag-n-drop/drag-n-drop.service';
import { StringGuardService } from 'src/app/services/string-guard/string-guard.service';

@Component({
  selector: 'app-add-conference-popup',
  templateUrl: './add-conference-popup.component.html',
  styleUrl: './add-conference-popup.component.css'
})
export class AddConferencePopupComponent {
  @Output() close = new EventEmitter<void>(); // Event to close the modal
  @Output() addConf = new EventEmitter<Conference>();

  public constructor(protected dragndrop : DragNDropService) {}

  // conference data
  confDate : Date = new Date();
  confImage : string = '';
  confTitle : string = '';
  confDetails : string = "";

  addNewConference() {
    // guards
    if (!StringGuardService.isStringValid(this.confTitle)) { 
      alert("A correct conference title should be provided");
      return; 
    }
    if (!StringGuardService.isStringValid(this.confDetails)) { 
      alert("Give some details about the conference");
      return; 
    }
    // if (!StringGuardService.hasValidExt(this.confImage, [ "png", "jpg" ])) {
    //   alert("The given image in invalid, the extension must be png or jpg");
    //   return; 
    // }

    // Clear the input fields after emitting
    this.addConf.emit({ date: this.confDate, image: this.confImage, title: this.confTitle, details: this.confDetails });
    this.closePopup();
  }

  closePopup() {
    this.confDate = new Date();
    this.confImage = '';
    this.confTitle = '';
    this.confDetails = "";
    this.close.emit(); // Emit event to close the popup
  }
}
