import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.page.html',
  styleUrls: ['./cart-item.page.scss'],
})
export class CartItemPage {
@Input() item: CartItem;
@Output() increase = new EventEmitter();
@Output() decrease = new EventEmitter();

}
