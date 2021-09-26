import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from '../pages/category/category.component';
import { DetailedPageComponent } from '../pages/detailed-page/detailed-page.component';
import { MainComponent } from '../pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':categId/:subCategId', component: CategoryComponent },
  { path: ':itemId', component: DetailedPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
