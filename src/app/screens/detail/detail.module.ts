import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { BadgePageModule } from 'src/app/components/badge/badge.module';
import { ButtonPageModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    BadgePageModule,
    ButtonPageModule,
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
