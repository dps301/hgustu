import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeDetailPage } from './notice-detail';
import { SafeHtmlPipe } from "../../directive/pipe.safehtml";

@NgModule({
  declarations: [
    NoticeDetailPage,
    SafeHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(NoticeDetailPage),
    
  ],
})
export class NoticeDetailPageModule {}
