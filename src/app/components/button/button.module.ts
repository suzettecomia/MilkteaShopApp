import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//import { ButtonPageRoutingModule } from './button-routing.module';

import { ButtonPage } from './button.page';

@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [ButtonPage],
  exports:[ButtonPage]
})
export class ButtonPageModule {}
