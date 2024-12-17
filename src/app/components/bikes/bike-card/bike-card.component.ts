import { Component, Input } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikeProviderService } from 'src/app/services/bike-provider/bike-provider.service';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.css']
})
export class BikeCardComponent {
  @Input() bikeData : Bike = BikeProviderService.getDefaultBikeData();
}
