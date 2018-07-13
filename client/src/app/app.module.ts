import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RegisterPage} from "../pages/home/register";
import {ReceivePage} from '../pages/home/receive';
import {SDKBrowserModule} from "../loopbacksdk";
import {WalletPage} from "../pages/home/wallet";
import {DemoPage} from "../pages/demo/demo";

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TxComponent} from "../pages/components/tx.comp";
import {CampaignPage} from "../pages/campaign/campaign.page";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    TxComponent,
    MyApp,
    HomePage,
    DemoPage,
    TabsPage,
    CampaignPage,
    RegisterPage,
    ReceivePage,
    WalletPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SDKBrowserModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    },  {
      links: [
        {segment: '', component: TabsPage, name: 'TabsPage' },
        {segment: 'receive/campaign/:campaignId', component: ReceivePage, name: 'ReceivePage' },
        {segment: 'wallet/:accountId', component: WalletPage, name: 'WalletPage' },
        {segment: 'campaign/:campaignId', component: CampaignPage, name: 'CampaignPage' },
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DemoPage,
    CampaignPage,
    TabsPage,
    RegisterPage,
    ReceivePage,
    WalletPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
