import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides; 

  constructor(public navCtrl: NavController) {

  }

  siguienteSlide(){
    this.slides.slideNext();
  }

  anteriorSlide(){
    this.slides.slidePrev();
  }

  irDoctores(){
    this.navCtrl.push(ContactPage);
  }

}
