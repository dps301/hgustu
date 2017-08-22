import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplainListPage } from "../complain-list/complain-list";

/**
 * Generated class for the ComplainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain',
  templateUrl: 'complain.html',
})
export class ComplainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainPage');
  }
  list(){
    this.navCtrl.push(ComplainListPage);
  }

}
