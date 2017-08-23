import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";

/**
 * Generated class for the BbqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bbq',
  templateUrl: 'bbq.html',
})
export class BbqPage {
  item = [
    "00:00 ~ 01:00",
    "01:00 ~ 02:00",
    "02:00 ~ 03:00",
    "03:00 ~ 04:00",
    "04:00 ~ 05:00",
    "05:00 ~ 06:00",
    "06:00 ~ 07:00",
    "07:00 ~ 08:00",
    "08:00 ~ 09:00",
    "09:00 ~ 10:00",
    "10:00 ~ 11:00",
    "11:00 ~ 12:00",
    "12:00 ~ 13:00",
    "13:00 ~ 14:00",
    "14:00 ~ 15:00",
    "15:00 ~ 16:00",
    "16:00 ~ 17:00",
    "17:00 ~ 18:00",
    "18:00 ~ 19:00",
    "19:00 ~ 20:00",
    "20:00 ~ 21:00",
    "21:00 ~ 22:00",
    "22:00 ~ 23:00",
    "23:00 ~ 24:00",
  ]
  date="20170823";
  bbqData:any;
  number1 = [0,1,2,3,4,5,6];
  number2 = [0,1,2,3,4,5,6];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  // ionViewDidLoad() {
  //   this.load();
  // }
  ionViewWillLoad() {
    this.load();
  }

  check(row,col){
    if(this.bbqData) 
    for (let i = 0; i < this.bbqData.length; i++){
      // look for the entry with a matching `code` value
      if (this.bbqData[i].row_number == row && this.bbqData[i].col_number == col ){
         return i;
      } else false;
    }
  }
  load(){
    this.http.get('/reserve/bbq?date='+this.date)
    .subscribe(data =>{
        this.bbqData = data.json().data;
    });
  }
}
