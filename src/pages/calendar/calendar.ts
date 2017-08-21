import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  calendar:any;
  item:any;
  detailData:any=0;
  choose:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
    this.http.get('/calendar')
    .subscribe(data =>{
        this.calendar = data.json();
        this.item = this.calendar.item;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    
  }
  detail(data) {
    console.log(data)
      this.detailData = data;
  }
  choice(day ){
    this.choose = day;
  }
}
