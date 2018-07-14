import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-specialties',
  templateUrl: 'specialties.html',
})
export class SpecialtiesPage {

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
      title: 'حفظ',
      subTitle: 'لقد تمت العملية بنجاح, شكرا',
      buttons: ['حسنا']
    });
    alert.present();
  }
  GotoList(title){
    this.navCtrl.push(AboutPage,{data:title});
    console.log(title);
  }
}

