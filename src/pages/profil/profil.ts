import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  latitude:string;
  longitude:string;
  info:string;
  name : string;
  specialty_01 : string;
  specialty_02 : string;
  wkp_Type : string;
  wkp_Usual_Name : string;
  address : string;
  addr_Building : string;
  mobile_Number : string;
  phone_Number : string;
  fax_Number : string;
  email : string;
  sex : string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private callNumber: CallNumber,
              private sms: SMS) {

    this.latitude = navParams.get('data_latitude');
    this.longitude = navParams.get('data_longitude');
    this.info = navParams.get('data_info');
    this.name = navParams.get('data_name');
    this.specialty_01 = navParams.get('data_specialty_01');
    this.specialty_02 = navParams.get('data_specialty_02');
    this.wkp_Type = navParams.get('data_wkp_Type');
    this.wkp_Usual_Name = navParams.get('data_wkp_Usual_Name');
    this.address = navParams.get('data_address');
    this.addr_Building = navParams.get('data_addr_Building');
    this.mobile_Number = navParams.get('data_mobile_Number');
    this.phone_Number = navParams.get('data_phone_Number');
    this.fax_Number = navParams.get('data_fax_Number');
    this.email = navParams.get('data_email');
    this.sex = navParams.get('data_sex');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  CallNum(num){
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
      console.log(num + ' calling...')
  }
  SendSMS(num){
    this.sms.send(num, '');
    console.log(num + ' sending...')
  }

}
