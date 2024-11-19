import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUniversidadPageRoutingModule } from './info-universidad-routing.module';

import { InfoUniversidadPage } from './info-universidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUniversidadPageRoutingModule
  ],
  declarations: [InfoUniversidadPage]
})
export class InfoUniversidadPageModule {}
