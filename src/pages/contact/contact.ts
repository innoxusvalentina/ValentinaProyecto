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
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#78BD43'
      },
      {
        'title': 'Dra.Paola Y. Jacobo Oceguera',
        'icon': 'nodejs',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#78BD43'
      },
      {
        'title': 'Dr. Marco Antonio Altamirano Cruz ',
        'icon': 'nodejs',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#78BD43'
      },
      {
        'title': 'Dr. Rafael Moreno Sales',
        'icon': 'nodejs',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#78BD43'
      },
      {
        'title': 'Dr. Rodrigo León Mar',
        'icon': 'nodejs',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#78BD43'
      },
      {
        'title': 'Dr.Luis Alejandro Castellanos ',
        'icon': 'nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Dra. Glenda Patricia García Soria',
        'icon': 'nodejs',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#78BD43'
      },
      {
        'title': 'Dr.Cristian Daniel Guzman',
        'icon': 'nodejs',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#78BD43'
      },
      {
        'title': 'Dr. Marlon Orellana',
        'icon': 'nodejs',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#78BD43'
      },
    ]

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

  
  

}
