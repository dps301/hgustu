import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ContainerPage } from "../container/container";

/**
 * Generated class for the FormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  forms
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,private iab: InAppBrowser) {
    this.http.get('/form')
    .subscribe(data =>{
        this.forms = data.json();
    });
  }

  ionViewDidLoad() {
  }
  detail(link){
    this.iab.create(link);
  }
}
