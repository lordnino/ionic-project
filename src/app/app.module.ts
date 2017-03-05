import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
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
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SMSVerficationCodePage } from '../pages/sms-verfication-code/sms-verfication-code';
import { SetPinCodePage } from '../pages/set-pin-code/set-pin-code';

/* importing home page tabs */
import { MerchantsPage } from '../pages/merchants/merchants';
import { ProductsPage } from '../pages/products/products';
/* importing the providers */
import { MerchantsService } from '../pages/merchants/merchants.service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    HelpPage,
    HomePage,
    LogOutPage,
    MyAccountPage,
    PaymentCardsPage,
    PaymentHistoryPage,
    PromoCodePage,
    MerchantsPage,
    ProductsPage,
    LandingPage,
    SignInPage,
    SignUpPage,
    SMSVerficationCodePage,
    SetPinCodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    HelpPage,
    HomePage,
    LogOutPage,
    MyAccountPage,
    PaymentCardsPage,
    PaymentHistoryPage,
    PromoCodePage,
    MerchantsPage,
    ProductsPage,
    LandingPage,
    SignInPage,
    SignUpPage,
    SMSVerficationCodePage,
    SetPinCodePage
  ],
  providers: [
    MerchantsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
