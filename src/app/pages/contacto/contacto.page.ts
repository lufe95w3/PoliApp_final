import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
})
export class ContactoPage {

  constructor(private navController: NavController) {}

  goToMenu() {
    this.navController.navigateBack('/menu');
  }

}
