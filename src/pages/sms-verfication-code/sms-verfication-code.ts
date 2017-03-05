import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetPinCodePage } from '../set-pin-code/set-pin-code';
/*
  Generated class for the SMSVerficationCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sms-verfication-code',
  templateUrl: 'sms-verfication-code.html'
})
export class SMSVerficationCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SMSVerficationCodePage');
  }

  goToSignIn(){
    this.navCtrl.push(SetPinCodePage);
  }

}
