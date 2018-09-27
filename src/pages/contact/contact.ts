import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  miLista=[];

  constructor(public navCtrl: NavController) {
    this.miLista = [
      {
        'title': 'Dr.Edgar Cerón García',
        'icon': 'nodejs',
        'description': 'Odontología',
        'color': '#78BD43',
        'edad': '35',
        'idioma': 'español, ingles',
        'labor': '7 años',
        'imagen': '../assets/img/1.jpg',
        
      },
      {
        'title': 'Dra.Paola Y. Jacobo Oceguera',
        'icon': 'nodejs',
        'description': 'otorrinolaringología',
        'color': '#78BD43',
        'edad': '43',
        'idioma': 'español, ruso',
        'labor': '13 años',
        'imagen': '../assets/img/4.jpg',
      },
      {
        'title': 'Dr. Marco Antonio Altamirano Cruz ',
        'icon': 'nodejs',
        'description': 'Pediatría',
        'color': '#78BD43',
        'edad': '30',
        'idioma': 'español, ingles',
        'labor': '2 años',
        'imagen': '../assets/img/2.jpg',
      },
      {
        'title': 'Dr. Rafael Moreno Sales',
        'icon': 'nodejs',
        'description': 'Pediatría',
        'color': '#78BD43',
        'edad': '35',
        'idioma': 'español',
        'labor': '3 años',
        'imagen': '../assets/img/3.jpg'
      },
      {
        'title': 'Dr. Rodrigo León Mar',
        'icon': 'nodejs',
        'description': 'Oftalmología',
        'color': '#78BD43',
        'edad': '42',
        'imagen': '../assets/img/5.jpg',
        'idioma': 'español, ingles, frances',
        'labor': '13 años'
      },
      {
        'title': 'Dr.Luis Alejandro Castellanos ',
        'icon': 'nodejs',
        'description': 'Terapeuta',
        'color': '#78BD43',
        'edad': '46',
        'imagen': '../assets/img/6.jpg',
        'idioma': 'español, ingles, aleman, frances',
        'labor': '17 años'
      },
      {
        'title': 'Dra. Glenda Patricia García Soria',
        'icon': 'nodejs',
        'description': 'Ginecología',
        'color': '#78BD43',
        'edad': '38',
        'idioma': 'español, ingles, aleman',
        'labor': '7 años',
        'imagen': '../assets/img/7.jpg'
      },
      {
        'title': 'Dr.Cristian Daniel Guzman',
        'icon': 'nodejs',
        'description': 'Traumatología',
        'color': '#78BD43',
        'edad': '37',
        'idioma': 'español, frances',
        'labor': '3 años',
        'imagen': '../assets/img/8.jpg'

      },
      {
        'title': 'Dr. Marlon Orellana',
        'icon': 'nodejs',
        'description': 'Dermatología',
        'color': '#78BD43',
        'edad': '39',
        'imagen': '../assets/img/9.jpg',
        'idioma': 'español, ingles, ruso',
        'labor': '7 años'
      },
    ]

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

  
  

}
