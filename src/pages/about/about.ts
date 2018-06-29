import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    public doctorServiceProvider: DoctorServiceProvider) {

      this.FillData();
  }


  doRefresh() {

    this.FillData();

    setTimeout(() => {
      console.log('Async operation has ended');
      
    }, 2000);
  }



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






}
