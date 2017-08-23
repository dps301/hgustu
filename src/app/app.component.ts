import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContainerPage } from '../pages/container/container';
import { LoginPage } from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginSession } from '../services/loginSession';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = ContainerPage;
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativeStorage: NativeStorage, private loginSession: LoginSession) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

