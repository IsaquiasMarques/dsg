import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerMobileComponent } from './banner-mobile/banner-mobile.component';
import { BannerBiggerScreensComponent } from './banner-bigger-screens/banner-bigger-screens.component';
import { WhatToOfferComponent } from './what-to-offer/what-to-offer.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerMobileComponent,
    BannerBiggerScreensComponent,
    WhatToOfferComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
