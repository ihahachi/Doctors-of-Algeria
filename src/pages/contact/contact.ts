import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpecialtiesPage } from '../specialties/specialties';
import { NewDoctorPage } from '../new-doctor/new-doctor';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  GotoNewDoctorPage(){
    this.navCtrl.push(NewDoctorPage)
    console.log("Go to NewDoctorPage")
  }

}
