import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PopularGoodsComponent } from './components/popular-goods/popular-goods.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainComponent } from './pages/main/main.component';
import { ShopRoutingModule } from './shop-routing/shop-routing.module';

@NgModule({
  declarations: [
    SliderComponent,
    PopularGoodsComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
