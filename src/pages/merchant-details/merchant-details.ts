import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MerchantInfoPage } from '../merchant-info/merchant-info';

/*
  Generated class for the MerchantDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchant-details',
  templateUrl: 'merchant-details.html'
})
export class MerchantDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantDetailsPage');
  }

  navMerchantInfo(){
    this.navCtrl.push(MerchantInfoPage);
  }

}
