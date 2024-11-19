import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intercambios',
  templateUrl: './intercambios.page.html',
  styleUrls: ['./intercambios.page.scss'],
})
export class IntercambiosPage {

  constructor(private router: Router) {}

  goToProgramas() {
    this.router.navigate(['/programas']);
  }
}
