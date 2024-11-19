import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechasInscripcionesPageRoutingModule } from './fechas-inscripciones-routing.module';

import { FechasInscripcionesPage } from './fechas-inscripciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechasInscripcionesPageRoutingModule
  ],
  declarations: [FechasInscripcionesPage]
})
export class FechasInscripcionesPageModule {}
