import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerMobileComponent } from './home/banner-mobile/banner-mobile.component';
import { BannerBiggerScreensComponent } from './home/banner-bigger-screens/banner-bigger-screens.component';
import { WhatToOfferComponent } from './home/what-to-offer/what-to-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerMobileComponent,
    BannerBiggerScreensComponent,
    WhatToOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
