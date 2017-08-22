import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainPage } from './complain';
import { ComplainListPageModule } from "../complain-list/complain-list.module";

@NgModule({
  declarations: [
    ComplainPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainPage),
    ComplainListPageModule
  ],
})
export class ComplainPageModule {}
