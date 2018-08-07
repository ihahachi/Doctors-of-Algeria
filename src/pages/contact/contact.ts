import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpecialtiesPage } from '../specialties/specialties';
import { NewDoctorPage } from '../new-doctor/new-doctor';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  constructor(public navCtrl: NavController,private iab: InAppBrowser) {
    
  }
  
  GotoNewDoctorPage(){
    this.navCtrl.push(NewDoctorPage)
    console.log("Go to NewDoctorPage")
  }

  OpenPageFacebook(){
    const browser = this.iab.create('https://ionicframework.com/');
  }

}
