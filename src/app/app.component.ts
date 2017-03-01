import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { LogOutPage } from '../pages/log-out/log-out';
import { MyAccountPage } from '../pages/my-account/my-account';
import { PaymentCardsPage } from '../pages/payment-cards/payment-cards';
import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
import { PromoCodePage } from  '../pages/promo-code/promo-code';
import { LandingPage } from '../pages/landing/landing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LandingPage;
  pages: Array<{title: string, component: any, img: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage, img: 'home' },
      { title: 'Home', component: HomePage, img: 'home' },
      { title: 'My Account', component: MyAccountPage, img: 'person' },
      { title: 'Payment Cards', component: PaymentCardsPage, img: 'card' },
      { title: 'PromoCode', component: PromoCodePage, img: 'cash' },
      { title: 'Payment History', component: PaymentHistoryPage, img: 'compass' },
      { title: 'Help', component: HelpPage, img: 'help' },
      { title: 'About', component: AboutPage, img: 'information-circle' },
      { title: 'Log Out', component: LogOutPage, img: 'power' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
