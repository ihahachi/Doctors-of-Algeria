import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core'

declare let google: any

//@IonicPage()
@Component({
  selector: 'page-doctorsmap',
  templateUrl: 'doctorsmap.html',
})

export class DoctorsmapPage {
  @ViewChild('map') mapElement: ElementRef
  map: any
  title: string;
  longitude: string;
  latitude: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
    this.longitude = navParams.get('longitude');
    this.latitude = navParams.get('latitude');
  }

  ionViewDidLoad() {
    this.loadMap()
  }


  loadMap() {

    //add map postion start
    let LatLng = new google.maps.LatLng(34.6692, 3.2539);
    let mapOptions = {
      center: LatLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    //load map for current options
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    //add Marker postion
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(this.latitude, this.longitude)
    });

    //add Marker info
    marker.info = new google.maps.InfoWindow({
      content: this.title
    })
    
    //create event watching click maker
    google.maps.event.addListener(marker , 'click' , function(){
      let marker_map = this.getMap();
      this.info.open(marker_map,this)
      alert(this.info.content)
    });
  }
}
