import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgetPasswordPage } from '../forget-password/forget-password';

/*
  Generated class for the SignIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  ForgetPassword(){
    this.navCtrl.push(ForgetPasswordPage);
  }

}
