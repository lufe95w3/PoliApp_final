import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private router: Router) {}

  // Método para redirigir a la página Home
  goHome() {
    this.router.navigate(['/home']);
  }
}
