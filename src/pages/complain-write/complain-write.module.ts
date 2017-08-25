import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainWritePage } from './complain-write';

@NgModule({
  declarations: [
    ComplainWritePage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainWritePage),
  ],
})
export class ComplainWritePageModule {}
