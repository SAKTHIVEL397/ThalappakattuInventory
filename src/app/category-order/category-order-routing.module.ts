import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryOrderPage } from './category-order.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryOrderPageRoutingModule {}
