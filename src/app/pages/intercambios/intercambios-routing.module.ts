import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntercambiosPage } from './intercambios.page';

const routes: Routes = [
  {
    path: '',
    component: IntercambiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntercambiosPageRoutingModule {}
