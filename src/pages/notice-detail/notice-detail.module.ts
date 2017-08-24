import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeDetailPage } from './notice-detail';
import { SafeHtmlModule } from '../../directive/pipe.safehtml.module';

@NgModule({
  declarations: [
    NoticeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeDetailPage),
    SafeHtmlModule
  ],
})
export class NoticeDetailPageModule {}
