import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vege-basket',
  templateUrl: './vege-basket.component.html',
  styleUrls: ['./vege-basket.component.css']
})
export class VegeBasketComponent {
  @Input() size : string = "small";
  @Input() basketImagePath : string = 'assets/images/vegebasketdefault.png';
  @Input() basketDescription : string = 'Il est bon mon panier !';
}
