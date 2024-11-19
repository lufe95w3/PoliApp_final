import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-detalles-carreras',
  templateUrl: './detalles-carreras.page.html',
  styleUrls: ['./detalles-carreras.page.scss'],
})
export class DetallesCarrerasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Lógica que se ejecuta al iniciar la página
  }

  // Método para redirigir a la página de carreras
  goToCarreras() {
    this.router.navigate(['/carreras']);
  }
}
