import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { LoginSession } from '../../services/loginSession';

@IonicPage()
@Component({
  selector: 'page-shop-complain',
  templateUrl: 'shop-complain.html',
})
export class ShopComplainPage {
  textareaValue = '';
  shopData: any = null;
  tel:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpService, public toastCtrl: ToastController, private loginSession: LoginSession) {
  }

  ionViewDidLoad() {
    console.log(this.loginSession.getInfo());
    this.shopData = this.navParams.get('shopData');
  }
  
  doTextareaValueChange(ev) {
    try {
      this.textareaValue = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }
  
  complain(){
    this.http.post('/shop/problem', {userNo: this.loginSession.getInfo().user_no, shopNo: this.shopData.shopNo, content: this.textareaValue,tel:this.tel})
    .subscribe( 
      d => {
        this.presentToast('감사합니다!');
        this.navCtrl.pop();
      },
      err => {
        this.presentToast('실패했습니다.');
      }
    );
  }
  
  presentToast(txt: string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
