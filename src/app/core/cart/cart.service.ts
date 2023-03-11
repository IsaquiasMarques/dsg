import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private data: DataService
  ) {
    this.viewCart();
    this.cartLength();
  }

  private cart: any = [];

  addToCart(item: any){

    if(!(this.cart.indexOf(item) === -1)){
      return;
    }

    this.cart.push(item);
    this.refreshLocalStorage();
  }

  removeFromCart(item: any){
    let index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
    
    this.refreshLocalStorage();
  }

  cleanCart(){
    this.cart = [];
    localStorage.removeItem('dsg_cart');
  }

  updateFromCart(item: any){}

  viewCart(){
    // convert array of strings in array of integers
    let localStorageItem = localStorage.getItem('dsg_cart');

    if(localStorageItem){
      let localStorageSplit = localStorageItem?.split(',').map(function(array_of_strings) {
        return parseInt(array_of_strings);
      });
      
      this.cart = localStorageSplit;
      return;
    }

    this.cart = [];

  }

  cartLength(){
    return this.cart.length;
  }

  getCart(){

    let items: any = [];

    this.cart.forEach((element: any) => {
      items.push(this.data.getProductById(element));
    });

    return items;

  }

  refreshLocalStorage(){
    localStorage.setItem('dsg_cart', this.cart);
  }


}
