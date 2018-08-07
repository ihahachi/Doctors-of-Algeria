import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
//import { Doctors } from '../../model/doctors';
//import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-specialties',
  templateUrl: 'specialties.html',
})
export class SpecialtiesPage {

  
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  GotoList(title){
    this.navCtrl.setRoot(AboutPage,{data:title});
    console.log(title);
  }
}

