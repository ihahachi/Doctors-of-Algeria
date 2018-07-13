import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  info : string;
  lat : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.get('data_info');
    this.lat = navParams.get('data_lat');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
