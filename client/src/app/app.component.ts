import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {Platform} from "ionic-angular";
import {LoopBackConfig} from "../loopbacksdk";
import {TranslateService} from "@ngx-translate/core";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private translate: TranslateService) {

    console.log(`window.location.origin = ${window.location.origin}`);
    if (window.location.port != '8100')
      LoopBackConfig.setBaseURL(window.location.origin);
    LoopBackConfig.setApiVersion('api');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('zh');

    translate.use( 'zh');
  }
}
