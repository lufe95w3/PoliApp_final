import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCarrerasPage } from './detalles-carreras.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCarrerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCarrerasPageRoutingModule {}
