//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../../model/doctors';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DoctorServiceProvider {

  private GpsListDoctor = this.db.list<Doctors>('doctorsmap')

  constructor(public db:AngularFireDatabase) {
    
  }


  getListDoctors(){
    return this.GpsListDoctor;
  }

  addDoctors(doctors:Doctors){
    return this.GpsListDoctor.push(doctors);
  }

  updateDoctors(doctors:Doctors){
    return this.GpsListDoctor.update(doctors.key,doctors);
  }

  deleteDoctors(doctors:Doctors){
    return this.GpsListDoctor.remove(doctors.key);
  }


}
