import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public productService: ProductService, private router: Router) {}

  public onClick(id: string) {
    this.router.navigate(['/main', id]);
  }
}
