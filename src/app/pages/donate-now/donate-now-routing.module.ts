import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonateNowPage } from './donate-now.page';

const routes: Routes = [
  {
    path: '',
    component: DonateNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateNowPageRoutingModule {}
