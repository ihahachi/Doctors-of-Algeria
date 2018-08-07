import { Component } from '@angular/core';
import { NavController, LoadingController ,ToastController, NavParams} from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ProfilPage } from '../profil/profil';
//import { Doctors } from '../../model/doctors';
import { DoctorServiceProvider } from '../../providers/doctor-service/doctor-service';
import { Network } from '@ionic-native/network';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



  itemArray = [];
  myObject = []
  items: Observable<any[]>;
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
    this.items = this.db.list('doctorsmap',
    ref => ref.orderByChild('specialty_01').equalTo(this.title)).valueChanges();
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
  GotoProfil(latitude,longitude,info,name,specialty_01,
    specialty_02,wkp_Type,wkp_Usual_Name,address,addr_Building,
    mobile_Number,phone_Number,fax_Number,email,sex){

    this.navCtrl.push(ProfilPage,{data_latitude:latitude,
                                  data_longitude:longitude,
                                  data_info:info,
                                  data_name:name,
                                  data_specialty_01:specialty_01,
                                  data_specialty_02:specialty_02,
                                  data_wkp_Type:wkp_Type,
                                  data_wkp_Usual_Name:wkp_Usual_Name,
                                  data_address:address,
                                  data_addr_Building:addr_Building,
                                  data_mobile_Number:mobile_Number,
                                  data_phone_Number:phone_Number,
                                  data_fax_Number:fax_Number,
                                  data_email:email,
                                  data_sex:sex
                                             });
    console.log(info);
  }

/*   getItems(ev) {
    // Reset items back to all of the items
    //this.initializeItems();
    //this.FillData();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      c = this.db.collection('doctorsmap');
      var query =this.items.where("capital", "==", true);
      /* .equalTo(this.title)
      .orderBy('name')
      .equalTo(val)).valueChanges();
    }
} */

}
