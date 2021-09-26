import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent {
  @Input() selectedProduct?: Product;

  public isFavorite = false;

  public inBasket = false;

  public addInFavorite() {
    this.isFavorite = true;
  }

  public addToBasket() {
    this.inBasket = true;
  }
}
