import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { LoginSession } from "../../services/loginSession";

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
  detailData2=0;
  cool:any;
  row:any;
  col:any;
  data:any={
    purpose:"",
    call:""
  };
  Sstart="";
  Send="";

  start:any;
  end:any;
  orderDttm:any = new Date().toISOString().substr(0,10);
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,
  private loginSession:LoginSession) {
  }

  // ionViewDidLoad() {
  //   this.load();
  // }
  ionViewDidLoad() {
    this.dateConfirm();
    
  }

  dateConfirm(){
    this.http.get('/reserve/bbq/limit')
    .subscribe(data =>{
      this.start = data.json().data[0].start_date
      this.end = data.json().data[0].end_date
      this.Sstart = this.start.substr(0,4)+this.start.substr(5,2)+this.start.substr(8,2)
      this.Send = this.end.substr(0,4)+this.end.substr(5,2)+this.end.substr(8,2)
      console.log(this.orderDttm,this.end, this.start)
      console.log("결과",this.orderDttm>this.start && this.orderDttm <this.end)
      this.load();
    })
  }
  load(){
    
      this.date = this.orderDttm.substr(0,4)+this.orderDttm.substr(5,2)+this.orderDttm.substr(8,2)
      this.http.get('/reserve/bbq?date='+this.date)
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
    console.log(this.date>this.Sstart && this.date <this.Send)
    console.log(this.date,this.start,this.end)
    if(this.date>=this.Sstart && this.date <=this.Send){
      this.http.post('/reserve/bbq',body)
      .subscribe(()=>{
        this.detailData = 0;
        this.load();
      })
    } else {
      alert(`불가능한 날짜입니다 ${this.start}~${this.end} 사이로 선택해 주세요`)
    }

    
  }
}
