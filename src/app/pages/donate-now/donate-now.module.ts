import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateNowPageRoutingModule } from './donate-now-routing.module';

import { DonateNowPage } from './donate-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateNowPageRoutingModule
  ],
  declarations: [DonateNowPage]
})
export class DonateNowPageModule {}
