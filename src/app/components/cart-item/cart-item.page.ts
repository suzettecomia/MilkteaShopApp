import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.page.html',
  styleUrls: ['./cart-item.page.scss'],
})
export class CartItemPage {
@Input() item: CartItem;

constructor(){
  this.item = {
    id:1,
    name: 'RED VELVET',
    price: 39,
    image:'assets/images/red_velvet.png',
    quantity:1
  };
}
}
