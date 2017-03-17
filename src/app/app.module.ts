import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



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
import { MerchantDetailsPage } from '../pages/merchant-details/merchant-details';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { IntroPage } from '../pages/intro/intro';
import { FacebookMobileNumberPage } from '../pages/facebook-mobile-number/facebook-mobile-number';
import { GoogleMobileNumberPage } from '../pages/google-mobile-number/google-mobile-number';
import { MerchantInfoPage } from '../pages/merchant-info/merchant-info';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { AuthLoginService } from '../pages/auth/auth-login/auth-login.service';

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
    SetPinCodePage,
    MerchantDetailsPage,
    ForgetPasswordPage,
    IntroPage,
    FacebookMobileNumberPage,
    GoogleMobileNumberPage,
    MerchantInfoPage,
    ThankYouPage,
    ProductDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, ),
    FormsModule,
    HttpModule
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
    SetPinCodePage,
    MerchantDetailsPage,
    ForgetPasswordPage,
    IntroPage,
    FacebookMobileNumberPage,
    GoogleMobileNumberPage,
    MerchantInfoPage,
    ThankYouPage,
    ProductDetailsPage
  ],
  providers: [
    MerchantsService,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthLoginService
  ]
})
export class AppModule {}
