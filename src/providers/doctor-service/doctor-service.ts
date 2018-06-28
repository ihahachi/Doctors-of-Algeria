import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../../model/doctors';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DoctorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorServiceProvider {

  private GpsListDoctor = this.db.list<Doctors>('doctorsmap')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello DoctorServiceProvider Provider');
  }


  getListDoctors(){
    return this.GpsListDoctor;
  }

  addDoctors(doctors:Doctors){
    return this.GpsListDoctor.push(doctors);
  }

  updateDoctors(doctors:Doctors){
    return this.GpsListDoctor.push(doctors);
  }

  deleteDoctors(doctors:Doctors){
    return this.GpsListDoctor.push(doctors);
  }


}
