import { Component } from '@angular/core';
import { Platform, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContainerPage } from '../pages/container/container';
import { LoginPage } from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginSession } from '../services/loginSession';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  backBtnPressed: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativeStorage: NativeStorage, private loginSession: LoginSession, private app: App, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      this.nativeStorage.getItem('userInfo')
      .then(
        data => {
          this.loginSession.setInfo(data);
          this.rootPage = ContainerPage;
          setTimeout(function() {
            splashScreen.hide();
          }, 1000);
        },
        error => {
          console.log(error);
          this.rootPage = LoginPage;
          setTimeout(function() {
            splashScreen.hide();
          }, 1000);
        }
      );

      var timer = null;
      platform.registerBackButtonAction(() => {
        if (!this.backBtnPressed) {
            this.backBtnPressed = true;
            if (timer)
                timer.unsubscribe();
            timer = Observable.timer(250).subscribe(() => {
                this.backBtnPressed = false;
            });

            if (app.getRootNav().length() > 1) {
                app.getRootNav().pop();
            } else {
                var prompt = alertCtrl.create({
                    message: "종료하시겠습니까?",
                    buttons: [
                        {
                            text: '취소'
                        },
                        {
                            text: '종료',
                            handler: data => {
                                platform.exitApp();
                            }
                        }
                    ]
                });
                prompt.present();
            }
        }
    }, 500);
    });
  }
}