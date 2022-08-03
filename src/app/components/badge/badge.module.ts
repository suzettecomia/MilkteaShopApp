import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BadgePage } from './badge.page';

@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [BadgePage],
  exports: [BadgePage],
})
export class BadgePageModule {}
