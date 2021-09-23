import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PopularGoodsComponent } from './components/popular-goods/popular-goods.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainComponent } from './pages/main/main.component';
import { ShopRoutingModule } from './shop-routing/shop-routing.module';
import { CategoryComponent } from './pages/category/category.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';

@NgModule({
  declarations: [
    SliderComponent,
    PopularGoodsComponent,
    MainComponent,
    CategoryComponent,
    DetailedPageComponent,
    GoodsListComponent,
    GoodsItemComponent,
    DetailedInfoComponent,
  ],
  imports: [SharedModule, ShopRoutingModule],
})
export class ShopModule {}
