import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { LoginSession } from "../../services/loginSession";

/**
 * Generated class for the DavidPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-david',
  templateUrl: 'david.html',
})
export class DavidPage {
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
  detailData2=0;
  cool:any;
  row:any;
  col:any;
  data:any={
    purpose:"",
    call:""
  };
  orderDttm:any = new Date().toISOString().substr(0,10);
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,
  private loginSession:LoginSession) {
  }

  // ionViewDidLoad() {
  //   this.load();
  // }
  ionViewDidLoad() {
    this.load();
  }

  load(){
    this.date = this.orderDttm.substr(0,4)+this.orderDttm.substr(5,2)+this.orderDttm.substr(8,2)
    this.http.get('/reserve/david?date='+this.date)
    .subscribe(data =>{
      this.itemDetail = [];
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
  bbqReserve(){
    var body ={
      team:this.data.team,
      purpose:this.data.purpose,
      name:this.loginSession.getInfo().name,
      num:this.loginSession.getInfo().stu_id,
      call:this.data.call,
      row:this.row,
      col:this.col,
      date:this.date
    }
    this.http.post('/reserve/david',body)
    .subscribe(()=>{
      this.detailData = 0;
      this.load();
    })
  }
}
