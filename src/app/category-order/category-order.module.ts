import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryOrderPageRoutingModule } from './category-order-routing.module';

import { CategoryOrderPage } from './category-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryOrderPageRoutingModule
  ],
  declarations: [CategoryOrderPage]
})
export class CategoryOrderPageModule {}
