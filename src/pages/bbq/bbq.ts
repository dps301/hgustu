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
  itemDetail = [];
  date="20170823";
  bbqData:any;
  number1 = [0,1,2,3,4,5,6];
  number2 = [0,1,2,3,4,5,6];
  detailData=0;
  row:any;
  col:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  // ionViewDidLoad() {
  //   this.load();
  // }
  ionViewDidLoad() {
    this.load();
  }

  load(){
    this.http.get('/reserve/bbq?date='+this.date)
    .subscribe(data =>{
        this.bbqData = data.json().data;
        for(let i=0 ;i<24;i++ ){
          var arr = [];
          var chch:any;
          for(let j=0 ;j<7;j++ ){
            chch = {reserve:false}
            for (let k= 0; k < this.bbqData.length; k++){
              if (this.bbqData[k].row_number == i && this.bbqData[k].col_number == j ){
                chch = { reserve: true ,data : this.bbqData[k]};
              } 
            }
            arr.push(chch)
          }
          this.itemDetail.push(arr);
        }
    });
  }
  bbqReserve(data){
    var body ={
      team:data.group_name,
      name:data.student_name,
      num:data.group_name,
      call:data.group_name,
      row:this.row,
      col:this.col
    }
    this.http.post('/reserve/bbq?date='+this.date)
    .subscribe(()=>{
      this.load();
    })
  }
}
