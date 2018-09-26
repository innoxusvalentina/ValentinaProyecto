import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the DatosPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-paciente',
  templateUrl: 'datos-paciente.html',
})
export class DatosPacientePage {

@ViewChild('slides') slides: Slides; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPacientePage');
  }

  siguienteSlide(){
    this.slides.slideNext();
  }

}
