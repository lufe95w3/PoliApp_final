import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechasInscripcionesPage } from './fechas-inscripciones.page';

const routes: Routes = [
  {
    path: '',
    component: FechasInscripcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechasInscripcionesPageRoutingModule {}
