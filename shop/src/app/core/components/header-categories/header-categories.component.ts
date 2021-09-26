import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Category } from '../../models/categories.model';
import { SubCategory } from '../../models/subcategory';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss'],
})
export class HeaderCategoriesComponent {
  public categories$?: Observable<Category[]> = this.productService.getCategories();

  constructor(public productService: ProductService, private router: Router) {}

  public onClick(id: string) {
    this.clearParams();
    this.productService.getCategories().subscribe((cats) => {
      const cata = cats.filter((cat) => {
        const findCat = cat.subCategories.filter((sub) => sub.id === id);
        if (findCat.length >= 1) this.setParams(cat, findCat[0]);
        return findCat.length >= 1;
      });
      [this.productService.actualCategory] = cata;

      this.router.navigate(['/main/', cata[0].id, id]);
    });
  }

  private setParams(cat: Category, subcat: SubCategory) {
    this.productService.actualSubCategory = subcat;
    this.productService.actualCategory = cat;
  }

  private clearParams() {
    this.productService.actualSubCategory = undefined;
    this.productService.actualCategory = undefined;
  }
}
