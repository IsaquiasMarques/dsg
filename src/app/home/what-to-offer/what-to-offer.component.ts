import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart/cart.service';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-what-to-offer',
  templateUrl: './what-to-offer.component.html',
  styleUrls: ['./what-to-offer.component.css']
})
export class WhatToOfferComponent implements OnInit {
  
  constructor(
    private cakeType: DataService,
    private cart: CartService
  ) { }

  cak_types: any = this.cakeType.get_products();

  isNextClickable: boolean = true;
  isPrevClickable: boolean = false;

  firstbox: any;
  lastbox: any;
  slider: any;

  ngOnInit(): void {
    this.slider = document.querySelector('.section-content-offering-component') as HTMLElement;
    let timeOutToGetFirstAndLastBoxes = setTimeout(() => {
      
      this.getFirstAndLastBoxes();

    }, 1000);
  }

  goForward(){
    if(!this.isNextClickable){
      return;
    }
    
    this.invertPrevAndNextValues();
    this.slider.scrollTo(this.slider.scrollWidth, 0);
  }

  goBackward(){
    if(!this.isPrevClickable){
      return;
    }

    this.invertPrevAndNextValues();
    this.slider.scrollTo(0, 0);
  }

  invertPrevAndNextValues(){
    this.isNextClickable = !this.isNextClickable;
    this.isPrevClickable = !this.isPrevClickable;
  }

  addToCart(item: any){
    this.cart.addToCart(item);
  }

  // @HostListener('wheel', ['$event'])
  // offeringSectionHorizontalScroll(){
  //   if(!this.firstbox || !this.lastbox){
  //     return;
  //   }

  //   console.log(this.slider.scrollLeft);
  //   // console.log(this.firstbox.scrollLeft);
  //   console.log(this.lastbox.offsetLeft);

  //   if(this.slider.scrollLeft <= this.firstbox.scrollLeft){
  //     this.isPrevClickable = false;
  //     this.isNextClickable = true;
  //     console.log("entra aqui A");

  //   }else if(this.slider.scrollLeft > this.firstbox.scrollLeft && this.slider.scrollLeft < this.lastbox.scrollLeft){
  //     this.isNextClickable = true;
  //     this.isPrevClickable = true;
  //     console.log("entra aqui B");

  //   }else if(this.slider.scrollLeft >= this.lastbox.scrollLeft){
  //     this.isNextClickable = false;
  //     this.isPrevClickable = true;
  //     console.log("entra aqui C");

  //   }

  // }

  getFirstAndLastBoxes(){
    this.firstbox = document.querySelector('.first_box_of_offering') as HTMLElement;
    this.lastbox = document.querySelector('.last_box_of_offering') as HTMLElement;
  }

}
