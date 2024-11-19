import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule) },
  { path: 'carreras', loadChildren: () => import('./pages/carreras/carreras.module').then(m => m.CarrerasPageModule) },
  { path: 'programas', loadChildren: () => import('./pages/programas/programas.module').then(m => m.ProgramasPageModule) },
  {
    path: 'programas',
    loadChildren: () => import('./pages/programas/programas.module').then( m => m.ProgramasPageModule)
  },
  {
    path: 'info-universidad',
    loadChildren: () => import('./info-universidad/info-universidad.module').then( m => m.InfoUniversidadPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'fechas-inscripciones',
    loadChildren: () => import('./pages/fechas-inscripciones/fechas-inscripciones.module').then( m => m.FechasInscripcionesPageModule)
  },
  {
    path: 'detalles-carreras',
    loadChildren: () => import('./pages/detalles-carreras/detalles-carreras.module').then( m => m.DetallesCarrerasPageModule)
  },
  {
    path: 'becas',
    loadChildren: () => import('./pages/becas/becas.module').then( m => m.BecasPageModule)
  },
  {
    path: 'intercambios',
    loadChildren: () => import('./pages/intercambios/intercambios.module').then( m => m.IntercambiosPageModule)
  },
  {
    path: 'detalles-carreras',
    loadChildren: () => import('./pages/detalles-carreras/detalles-carreras.module').then( m => m.DetallesCarrerasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
