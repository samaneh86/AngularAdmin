import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductPage } from './add-product.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AddProductPageRoutingModule {}
