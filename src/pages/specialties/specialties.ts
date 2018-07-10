import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';



@Component({
  selector: 'page-specialties',
  templateUrl: 'specialties.html',
})
export class SpecialtiesPage {

  doctors:Doctors={    
    latitude:'',
    longitude:'',
    info:''
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public doctorServiceProvider:DoctorServiceProvider,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    
  }


  adddoctors(doctors){
    this.doctorServiceProvider.addDoctors(doctors).then(ref => {
      this.MessageBox()
    })
  }

  MessageBox() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
