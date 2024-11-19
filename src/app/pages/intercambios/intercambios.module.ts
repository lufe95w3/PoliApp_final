import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntercambiosPageRoutingModule } from './intercambios-routing.module';

import { IntercambiosPage } from './intercambios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercambiosPageRoutingModule
  ],
  declarations: [IntercambiosPage]
})
export class IntercambiosPageModule {}
