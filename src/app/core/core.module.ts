import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart/cart.service';
import { DataService } from './data/data.service';



@NgModule({
  declarations: [],
  providers: [
    CartService,
    DataService
  ],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
