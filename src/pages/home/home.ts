import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NearerPage } from '../nearer/nearer';
import { SearchPage } from '../search/search';
import { SpecialtiesPage } from '../specialties/specialties';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GotoSpecialties(){
    this.navCtrl.push(SpecialtiesPage)
    console.log("Go to Specialties")
  }

  GotoSearch(){
    this.navCtrl.push(SearchPage)
    console.log("Go to Serach")
  }

  GotoNearer(){
    this.navCtrl.push(NearerPage) 
    console.log("Go to Nearer")
  }
  

}
