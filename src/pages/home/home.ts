import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPacientePage } from '../datos-paciente/datos-paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ingresarDatosPaciente(){
    this.navCtrl.push(DatosPacientePage);
  }

}
