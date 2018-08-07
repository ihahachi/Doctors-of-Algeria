import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';
//import { ContactPage } form


//@IonicPage()
@Component({
  selector: 'page-new-doctor',
  templateUrl: 'new-doctor.html',
})
export class NewDoctorPage {
  doctors:Doctors={    
    latitude:'',
    longitude:'',
    info:'',
    name : '',
    specialty_01 : '',
    specialty_02 : '',
    wkp_Type : '',
    wkp_Usual_Name : '',
    address : '',
    addr_Building : '',
    mobile_Number : '',
    phone_Number : '',
    fax_Number : '',
    email : '',
    sex : ''
  }
  constructor(public navCtrl: NavController,
              public doctorServiceProvider:DoctorServiceProvider,
              public navParams: NavParams,
              public alertCtrl:AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDoctorPage');
  }

  MessageBox() {
    let alert = this.alertCtrl.create({
      title: 'حفظ',
      subTitle: 'لقد تمت العملية بنجاح, شكرا',
      buttons: ['حسنا']
    });
    alert.present();
  }

  adddoctors(doctors){
    this.doctorServiceProvider.addDoctors(doctors).then(ref => {
      this.MessageBox()
      this.navCtrl.pop();  
    })
  }
  
}
