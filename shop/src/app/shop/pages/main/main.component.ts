import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/categories.model';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public categories$?: Observable<Category[]> = this.productService.getCategories();

  public items: Product[][] = [];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.categories$?.subscribe((res) => {
      // eslint-disable-next-line array-callback-return
      res.map((category) => {
        const subCategoryNum = Math.floor(Math.random() * category.subCategories.length);
        const subCategoryId = category.subCategories[subCategoryNum].id;
        this.productService
          .getProductsForSlider(category.id, subCategoryId)
          .subscribe((item) => {
            this.items.push(item);
          });
      });
    });
  }
}
