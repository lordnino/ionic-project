import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMSVerficationCodePage } from '../sms-verfication-code/sms-verfication-code';
import { FacebookMobileNumberPage } from '../facebook-mobile-number/facebook-mobile-number';
import { GoogleMobileNumberPage } from '../google-mobile-number/google-mobile-number';

/*
  Generated class for the SignUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  goToSignIn(){
    this.navCtrl.push(SMSVerficationCodePage);
  }

  navFacebookMobileNumber(){
    this.navCtrl.setRoot(FacebookMobileNumberPage);
  }

  navGoogleMobileNumber(){
    this.navCtrl.setRoot(GoogleMobileNumberPage);
  }

}
