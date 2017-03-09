import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, Content } from 'ionic-angular';
import { MerchantsService } from './merchants.service';
import { MerchantDetailsPage } from '../merchant-details/merchant-details';
import { App } from 'ionic-angular';
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
    private menu :MenuController,
    private merchantsService: MerchantsService,
    private app: App
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantsPage');
  }

  goTo(){
    this.app.getRootNav().push(MerchantDetailsPage);
  }

}
