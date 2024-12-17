import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { BikeRentPageComponent } from './components/bikes/bike-rent-page/bike-rent-page.component';
import { VegeBasketCommandPageComponent } from './components/vege-basket-command/vege-basket-command-page/vege-basket-command-page.component';
import { FripPageComponent } from './components/frip/frip-page/frip-page.component';
import { ConferencePageComponent } from './components/conference/conference-page/conference-page.component';
import { AuthComponent } from './auth/auth.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { animate } from '@angular/animations';

const routes: Routes = [
  { path : '', component : HomeComponent, data : { animation : 'Home'}},
  { path : 'bike-rent', component : BikeRentPageComponent, data : { animation : 'BikeRentPage'}},
  { path : 'vege-basket-command', component : VegeBasketCommandPageComponent, data : { animation : 'VegeBasketCommandPage'}},
  { path : 'frip-info', component : FripPageComponent, data : { animation : 'FripInfoPage'}},
  { path : 'conf-calendar', component : ConferencePageComponent, data : { animation : 'ConferencePage'}},
  { path : 'login', component : AuthComponent},
  { path : 'contact', component : ContactPageComponent, data : { animation : 'ContactPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
