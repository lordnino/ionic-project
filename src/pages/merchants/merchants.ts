import { Component } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { MerchantsService } from './merchants.service';
/*
  Generated class for the Merchants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html'
})
export class MerchantsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private merchantsService: MerchantsService,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantsPage');
  }

}
