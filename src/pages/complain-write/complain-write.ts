import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginSession } from "../../services/loginSession";
import { HttpService } from "../../services/http.service";

/**
 * Generated class for the ComplainWritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain-write',
  templateUrl: 'complain-write.html',
})
export class ComplainWritePage {

  complain:any = {
    title:null,
    content:null
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private loginSession : LoginSession
    , private http:HttpService,private toastCtrl: ToastController)
     {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainWritePage');
  }
  submit(){
    let body = {
      "title": this.complain.title,
      "content": this.complain.content,
      "name": this.loginSession.getInfo().name,
      "stu_id": this.loginSession.getInfo().stu_id,
      "no": this.loginSession.getInfo().user_no
    }
    console.log(body)
    if( body.title == null || body.content ==null){
      this.presentToast2();
    }
    else {
      this.http.post('/notice',body)
    .subscribe(
      date =>{
        this.presentToast()
        this.navCtrl.pop();
      }
    )
    }
  }
  private textareaValue = '';
  doTextareaValueChange(ev) {
    try {
      this.complain.content = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: '접수되었습니다',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentToast2() {
    let toast = this.toastCtrl.create({
      message: '정보를 입력해주세요',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
