import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  info : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
