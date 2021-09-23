import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
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

  public itemsHighRating: Product[][] = [];

  public itemsHighRatingSUB = new Subject<Product[][]>();

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

        this.productService
          .getSubCategory(category.id, subCategoryId)
          .subscribe((firstArr) => {
            const subArr = firstArr.filter((all) => all.rating >= 4);
            this.itemsHighRating.push(subArr);
          });
      });
    });

    setTimeout(this.timeout.bind(this, this.itemsHighRating), 1000);
  }

  public timeout(arrs: Product[][]) {
    const result: Product[][] = [];
    const bigArr: Product[] = this.flatting(arrs);
    const size = 6;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < bigArr.length; i += size) {
      const subArray = bigArr.slice(i, i + size);
      if (subArray.length >= 6) result.push(subArray);
    }
    this.itemsHighRatingSUB.next(result);
  }

  // eslint-disable-next-line class-methods-use-this
  private flatting(array: Product[][]): Product[] {
    const arrFlat: Product[] = [];
    array.forEach((elem) => {
      arrFlat.push(...elem);
    });
    return arrFlat;
  }
}
