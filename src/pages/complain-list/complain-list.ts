import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { ComplainDetailPage } from "../complain-detail/complain-detail";

/**
 * Generated class for the ComplainListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain-list',
  templateUrl: 'complain-list.html',
})
export class ComplainListPage {
  complains
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.load();
  }
  load() {
    this.http.get('/complain?offset=0&pageSize=3')
    .subscribe(data =>{
        this.complains = data.json().data;
    })
  }
  detail(com){
    this.navCtrl.push(ComplainDetailPage,{com:com})
  }
}
