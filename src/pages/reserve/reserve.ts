import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BbqPage } from "../bbq/bbq";

/**
 * Generated class for the ReservePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {
  reserves
  link = [BbqPage]
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,private iab: InAppBrowser) {
    this.http.get('/reserve')
    .subscribe(data =>{
        this.reserves = data.json();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservePage');
  }
  godetail(no){
    this.navCtrl.push(this.link[no])
  }
  detail(link){
    this.iab.create(link);
  }
}
