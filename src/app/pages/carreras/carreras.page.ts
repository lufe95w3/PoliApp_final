import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carreras',
  templateUrl: 'carreras.page.html',
  styleUrls: ['carreras.page.scss'],
})
export class CarrerasPage {

  constructor(private router: Router) {}

  // Método para redirigir al menú
  goToMenu() {
    this.router.navigate(['/menu']);  // Redirige a la página de menú
  }

}
