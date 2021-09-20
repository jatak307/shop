import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PopularGoodsComponent } from './components/popular-goods/popular-goods.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    SliderComponent,
    PopularGoodsComponent,
    MainComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ShopModule { }
