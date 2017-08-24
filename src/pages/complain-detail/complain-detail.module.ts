import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainDetailPage } from './complain-detail';
import { SafeHtmlModule } from '../../directive/pipe.safehtml.module';

@NgModule({
  declarations: [
    ComplainDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainDetailPage),
    SafeHtmlModule
  ],
})
export class ComplainDetailPageModule {}
