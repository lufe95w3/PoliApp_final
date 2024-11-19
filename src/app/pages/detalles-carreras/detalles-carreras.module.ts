import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCarrerasPageRoutingModule } from './detalles-carreras-routing.module';

import { DetallesCarrerasPage } from './detalles-carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCarrerasPageRoutingModule
  ],
  declarations: [DetallesCarrerasPage]
})
export class DetallesCarrerasPageModule {}
