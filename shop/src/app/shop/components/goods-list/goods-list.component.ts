import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { Category } from 'src/app/core/models/categories.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subcategory';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit, OnDestroy {
  @Input() products: Product[] = [];

  public category$ = new Subject<Category>();

  public sub$ = new Subject<SubCategory>();

  constructor(
    private productService: ProductService,
    private activRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activRoute.params.subscribe((par) => {
      this.productService.getCategories().subscribe((cats) => {
        cats.forEach((c) => {
          if (c.id === par.categId) {
            const currentSub: SubCategory[] = c.subCategories.filter(
              (sub: SubCategory) => sub.id === par.subCategId,
            );
            this.category$.next(c);
            this.sub$.next(currentSub[0]);
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.category$.unsubscribe();
  }
}
