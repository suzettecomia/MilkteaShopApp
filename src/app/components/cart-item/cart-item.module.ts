import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartItemPage } from './cart-item.page';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CartItemPage],
  exports:[CartItemPage]
})
export class CartItemPageModule {}
