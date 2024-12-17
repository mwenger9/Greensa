import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.css']
})
export class RouteButtonComponent {
  @Input() showbutton : boolean = false;
  @Input() buttonText : string = 'Default button text';
  @Input() routePath : string = '';
}
