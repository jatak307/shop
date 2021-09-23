import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-popular-goods',
  templateUrl: './popular-goods.component.html',
  styleUrls: ['./popular-goods.component.scss'],
})
export class PopularGoodsComponent {
  @Input() itemsHighRating: Product[][] | null = [];
}
