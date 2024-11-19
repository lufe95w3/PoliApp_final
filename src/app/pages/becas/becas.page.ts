import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.page.html',
  styleUrls: ['./becas.page.scss'],
})
export class BecasPage {

  constructor(private router: Router) {}

  goToProgramas() {
    this.router.navigate(['/programas']);
  }
}
