import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';

/*
  Generated class for the MerchantInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchant-info',
  templateUrl: 'merchant-info.html'
})
export class MerchantInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantInfoPage');
  }

  navThankYou(){
    this.navCtrl.setRoot(ThankYouPage);
  }

}
