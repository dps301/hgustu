import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { LoginSession } from '../../services/loginSession';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';
import { ContainerPage } from '../container/container';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  id: string = "";
  pw: string = "";
  
  saveChecked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpService, private loginSession: LoginSession, private nativeStorage: NativeStorage, private platform: Platform) {
  }

  ionViewDidLoad() {
    if(this.platform.is('mobileweb')) {
      this.loginSession.setInfo({user_no: 79738, name: "신대호", stu_id: "21100366", call: null});
      this.goMain();
    }

    if(!this.platform.is('mobileweb')) {
      this.nativeStorage.getItem('userInfo')
      .then(
        data => {
          alert(data.json());
          this.loginSession.setInfo(data.json());
          this.goMain();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  login() {
    this.http.post('/users/login', {stu_id: this.id, pwd: this.pw})
    .subscribe(
      data => {
        this.loginSession.setInfo(data.json());
        
        if(this.saveChecked) {
          this.nativeStorage.setItem('userInfo', this.loginSession.getInfo())
          .then(
            () => {
              this.goMain();
            },
            error => console.error('Error storing item', error)
          );
        }
        else {
          this.nativeStorage.clear()
          .then(
            () => {
              this.goMain();
            },
            error => console.error('Error clearing item', error)
          );
        }
      },
      error => {
        console.log(error.json());
      }
    );
  }

  goMain() {
    this.navCtrl.setRoot(ContainerPage);
  }
}
