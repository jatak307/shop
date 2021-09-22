import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../../models/categories.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss'],
})
export class HeaderCategoriesComponent {
  public categories$?: Observable<Category[]> = this.productService.getCategories();

  constructor(public productService: ProductService) {
    productService.getSubCategories().subscribe((res) => {
      // console.log(res);
      res.map((obs) => {
        obs.subscribe((resOb) => {
          // console.log(resOb);
        });
      });
      // res.subscribe((sub) => {
      //   console.log(sub);
      // });
    });

    this.categories$?.subscribe((res) => console.log(res));
  }
}
