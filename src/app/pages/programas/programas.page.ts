import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programas',
  templateUrl: 'programas.page.html',
  styleUrls: ['programas.page.scss'],
})
export class ProgramasPage {

  constructor(private router: Router) {}

  // Método para redirigir a la página de carreras
  goCarreras() {
    this.router.navigate(['/carreras']);
  }
}
