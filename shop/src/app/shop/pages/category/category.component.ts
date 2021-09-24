import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public subCategory$ = new Subject<Product[]>();

  private catLocStor = localStorage.getItem('actualCategory');

  private subCatLocStor = localStorage.getItem('actualSubCategory');

  private catId = this.productService.actualCategory?.id || this.catLocStor || undefined;

  private subCatId =
    this.productService.actualSubCategoryId?.id || this.subCatLocStor || undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((par) => {
      console.log('params', par);
      this.productService.getSubCategory(par.categId, par.subCategId).subscribe((res) => {
        this.subCategory$.next(res);
      });
    });
  }
}
