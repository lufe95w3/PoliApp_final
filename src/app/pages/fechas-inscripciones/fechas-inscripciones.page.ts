import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fechas-inscripciones',
  templateUrl: 'fechas-inscripciones.page.html',
  styleUrls: ['fechas-inscripciones.page.scss'],
})
export class FechasInscripcionesPage {

  constructor(private navCtrl: NavController) {}

  goToMenu() {
    this.navCtrl.navigateBack('/menu');
  }
}
