import { Component } from '@angular/core';
import { NavController, LoadingController ,ToastController, NavParams} from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ProfilPage } from '../profil/profil';
//import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';
import { Network } from '@ionic-native/network';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



  itemArray = [];
  myObject = []
  items: AngularFireObject<any>;
  title : string;




  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,
              public doctorServiceProvider: DoctorServiceProvider,
              public loadingCtrl: LoadingController,
              private network: Network,
              private toastCtrl: ToastController,
              public navParams: NavParams) {

      this.title = navParams.get('data');

    this.FillData();
    this.presentLoadingCustom();

    // watch network for a disconnect
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast('لايوجد انترنات')      
    });
    // watch network for a connect
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.presentToast('تم الأتصال')      
    });

  }



  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.presentLoadingCustom();
    this.FillData();
    
    refresher.complete();

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
    });

    loading.present();
  }

  // Show Message Alter
  presentToast(Msg) {
    let toast = this.toastCtrl.create({
      message: Msg,
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      
    });
  
    toast.present();
  }
  GotoProfil(info,lat){
    this.navCtrl.push(ProfilPage,{data_info:info,data_lat:lat});
    console.log(info);
  }
}
