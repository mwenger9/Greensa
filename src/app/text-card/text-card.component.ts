import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent {
  // Size param
  @Input() width : string = '100%'
  @Input() height : string = 'auto'

  // Text param
  @Input() title : string = 'Default Title';
  @Input() body : string = 'Default body text goes here.';

  // Button param
  @Input() showbutton : boolean = false;
  @Input() buttonText : string = 'Default button text';
  @Input() routePath : string = '';
}
