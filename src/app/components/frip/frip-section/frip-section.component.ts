import { Component } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-frip-section',
  templateUrl: './frip-section.component.html',
  styleUrls: ['./frip-section.component.css']
})
export class FripSectionComponent {

  ngAfterViewInit() {
    AOS.init({
        duration: 1000, // Global duration for animations
        once: true,     // Ensures animations trigger only once
    });
}


  info_bubbles = [
    { 
      title: "Frip'INSA ?", 
      content: "Renouvelle ta garde robe de manière responsable. <br> Donne-nous les vêtements dont tu ne veux plus, on les vend à ta place ! <br> Tu peux même récupérer une part du bénéfice !" 
    },
    { 
      title: "Où ? Quand ?", 
      content: "Localisation : K-fet de l'INSA, <br> Dates : le 23 novembre 2036" 
    },
    { 
      title: "Planning ?", 
      content: "Avant la frip : permanances à la K-fet et au self de l'INSA pour déposer tes vêtements ! (voir les dates sur instagram), <br><br> Pendant la frip : on vent tes vêtements (paiement lyfpay/espèces), <br><br> Après la frip : 1/3 des bénéfices à une asso pour l'environnement + 2/3 des bénéfices pour toi !", 
      longText: true
    }
  ];
}

