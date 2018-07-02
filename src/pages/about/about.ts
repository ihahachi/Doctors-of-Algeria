import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';





@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  doctors: Doctors = {
    latitude: '',
    longitude: '',
    info: ''
  }

  itemArray = [];
  myObject = []
  items: AngularFireObject<any>;




  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase,
    public doctorServiceProvider: DoctorServiceProvider,
    public loadingCtrl: LoadingController) {
    this.FillData();
    this.presentLoadingCustom();
  }



  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.FillData();
    this.presentLoadingCustom();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  // Get Data From Firbase.
  FillData() {
    this.items = this.db.object('doctorsmap');
    this.items.snapshotChanges().subscribe(action => {

      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data')
      } else {
        this.itemArray.push(action.payload.val())
        this.myObject = Object.entries(this.itemArray[0])
      }
    });
  }

  


//Loanding function.
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        <div class="custom-spinner-container">
        <p>جاري تحميل البيانات</p>
        <ion-spinner name="ios"></ion-spinner>
        </div>`,
      duration: 1000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();
  }






}
