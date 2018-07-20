import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild , ElementRef } from '@angular/core'

declare let google:any

//@IonicPage()
@Component({
  selector: 'page-doctorsmap',
  templateUrl: 'doctorsmap.html',
})

export class DoctorsmapPage {
  @ViewChild('map') mapElement:ElementRef
  map:any
  title : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get('title');
  }

  ionViewDidLoad() {
     this.loadMap()
  }


loadMap(){
      let LatLng = new google.maps.LatLng(34.6692 , 3.2539  );
      let mapOptions = {
        center:LatLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
}
