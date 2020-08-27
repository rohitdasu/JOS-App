import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationPageRoutingModule } from './celebration-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { CelebrationPage } from './celebration.page';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationPageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserModule
  ],
  declarations: [CelebrationPage]
})
export class CelebrationPageModule {}
