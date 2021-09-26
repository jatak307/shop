import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { Category } from 'src/app/core/models/categories.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subcategory';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  @Input() product?: Product | null;

  public category$ = new Subject<Category>();

  public sub$ = new Subject<SubCategory>();

  public catId = '';

  public isFavorite = false;

  public inBasket = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((cats) => {
      cats.forEach((cat: Category) => {
        cat.subCategories.forEach((sub) => {
          this.productService.getSubCategory(cat.id, sub.id).subscribe((prsArr) => {
            const check = prsArr.filter((pr) => pr.id === this.product?.id);
            if (check[0]) {
              this.sub$.next(sub);
              this.category$.next(cat);
            }
          });
        });
      });
    });

    this.category$.subscribe((cat) => {
      this.catId = cat.id;
    });
  }

  public onClick(subId: string) {
    this.router.navigate(['/main/', this.catId, subId]);
  }

  public addInFavorite() {
    this.isFavorite = true;
  }

  public addToBasket() {
    this.inBasket = true;
  }

  ngOnDestroy(): void {
    this.category$.unsubscribe();
  }
}
