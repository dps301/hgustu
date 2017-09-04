import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpService, private loginSession: LoginSession, private nativeStorage: NativeStorage, private platform: Platform, private toast: ToastController) {
  }

  ionViewDidLoad() {
    if(this.platform.is('mobileweb')) {
      this.loginSession.setInfo({user_no: 79738, name: "신대호", stu_id: "21100366", call: null});
      this.goMain();
    }
  }

  login() {
    this.http.post('/users/login', {stu_id: this.id, pwd: this.pw})
    .subscribe(
      data => {
        this.loginSession.setInfo(data.json());
        
        this.nativeStorage.setItem('userInfo', this.loginSession.getInfo())
        .then(
          () => {
            this.goMain();
          },
          error => console.error('Error storing item', error)
        );
        // else {
        //   this.nativeStorage.clear()
        //   .then(
        //     () => {
        //       this.goMain();
        //     },
        //     error => console.error('Error clearing item', error)
        //   );
        // }
      },
      error => {
        let no = error.json().no;
        if(no == -1 ){
          this.presentToast("비밀번호가 틀렸습니다. 확인 후 다시 로그인을 시도해주세요");
        } else if (no==0){
          this.presentToast("존재하지 않는 회원정보입니다. 총학생회 홈페이지(stu.handong.edu)에서 회원가입을 하신 후 다시 로그인 시도를 해주세요");
        } else {
          this.presentToast("존재하지 않는 회원정보입니다. 총학생회 홈페이지(stu.handong.edu)에서 회원가입을 하신 후 다시 로그인 시도를 해주세요");
        }
      }
    );
  }

  goMain() {
    this.navCtrl.setRoot(ContainerPage);
  }

  presentToast(str) {
    let toast = this.toast.create({
      message: str,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      // console.log('Dismissed toast');
    });

    toast.present();
  }
}
