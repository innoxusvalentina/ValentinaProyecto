import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

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

@ViewChild(Slides) slides: Slides; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPacientePage');
  }

  siguienteSlide(){
    this.slides.slideNext();
  }
  
  anteriorSlide(){
    this.slides.slidePrev();
  }

  irValidacion(){
    this.navCtrl.push(HomePage);
  }

  irEncuesta(){
    this.navCtrl.push(AboutPage);
  }

}
