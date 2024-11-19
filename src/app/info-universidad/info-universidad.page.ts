import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-universidad',
  templateUrl: 'info-universidad.page.html',
  styleUrls: ['info-universidad.page.scss'],
})
export class InfoUniversidadPage {

  constructor(private navController: NavController) {}

  goToMenu() {
    this.navController.navigateBack('/menu');
  }
}
