import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainListPage } from './complain-list';
import { ComplainDetailPageModule } from "../complain-detail/complain-detail.module";

@NgModule({
  declarations: [
    ComplainListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainListPage),
    ComplainDetailPageModule
  ],
})
export class ComplainListPageModule {}
