import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  id: string = "21100366";
  pw: string = "920418";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpService) {
  }

  ionViewDidLoad() {
  }

  login() {
    this.http.post('/users/login', {stu_id: this.id, pwd: this.pw})
    .subscribe(
      data => {
        console.log(data.json());
      },
      error => {
        console.log(error.json());
      }
    );
  }
}
