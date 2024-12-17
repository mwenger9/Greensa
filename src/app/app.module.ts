import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import  localFr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextCardComponent } from './text-card/text-card.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { HeaderComponent } from './header/header.component';
import { BikeRentSectionComponent } from './components/bikes/bike-rent-section/bike-rent-section.component';
import { BikeRentPageComponent } from './components/bikes/bike-rent-page/bike-rent-page.component';
import { HomeComponent } from './components/home/home.component';
import { BikeCardComponent } from './components/bikes/bike-card/bike-card.component';
import { VerticalProgressBarComponent } from './vertical-progress-bar/vertical-progress-bar.component';
import { VegeBasketCommandSectionComponent } from './components/vege-basket-command/vege-basket-command-section/vege-basket-command-section.component';
import { VegeBasketCommandPageComponent } from './components/vege-basket-command/vege-basket-command-page/vege-basket-command-page.component';
import { VegeBasketComponent } from './components/vege-basket-command/vege-basket/vege-basket.component';
import { FripSectionComponent } from './components/frip/frip-section/frip-section.component';
import { FripPageComponent } from './components/frip/frip-page/frip-page.component';
import { ConferenceSectionComponent } from './components/conference/conference-section/conference-section.component';
import { ConferencePageComponent } from './components/conference/conference-page/conference-page.component';
import { RouteButtonComponent } from './components/buttons/route-button/route-button.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './auth/components/login-form-component/login-form-component.component';
import { RegisterFormComponent } from './auth/components/register-form-component/register-form-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConferenceCalendarComponent } from './components/conference/conference-calendar/conference-calendar.component';
import { AddBikePopupComponent } from "./components/bikes/add-bike-popup/add-bike-popup.component";
import { LoggedIconComponent } from './logged-icon/logged-icon.component';
import { AddConferencePopupComponent } from "./components/conference/add-conference-popup/add-conference-popup.component";

registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownMenuComponent,
    TextCardComponent,
    BikeCardComponent,
    BikeRentSectionComponent,
    BikeRentPageComponent,
    VerticalProgressBarComponent,
    VegeBasketCommandSectionComponent,
    VegeBasketCommandPageComponent,
    VegeBasketComponent,
    FripSectionComponent,
    FripPageComponent,
    ConferenceSectionComponent,
    ConferencePageComponent,
    RouteButtonComponent,
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    ContactPageComponent,
    ConferenceCalendarComponent,
    AddBikePopupComponent,
    AddConferencePopupComponent,
    LoggedIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
