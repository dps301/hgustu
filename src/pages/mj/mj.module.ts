import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MjPage } from './mj';

@NgModule({
  declarations: [
    MjPage,
  ],
  imports: [
    IonicPageModule.forChild(MjPage),
  ],
})
export class MjPageModule {}
