import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from './core/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {

  public hasMenuToShow: boolean = false;
  public hasCartTohow: boolean = false;

  constructor(
    public cart: CartService
  ){ }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnDestroy(): void {
    
  }

  changeMenuStatus(){
    this.hasMenuToShow = ! this.hasMenuToShow;
  }

  changeCartPanelStatus(){
    this.hasCartTohow = !this.hasCartTohow;
  }

  removeItemFromCart(item: number){
    this.cart.removeFromCart(item);
  }

  cleanCart(){
    this.cart.cleanCart();
    this.changeCartPanelStatus();
  }
}
