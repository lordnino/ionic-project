import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

/*
  Generated class for the SetPinCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-pin-code',
  templateUrl: 'set-pin-code.html'
})
export class SetPinCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPinCodePage');
  }

  goToSignIn(){
    this.navCtrl.push(SignInPage);
  }

}
