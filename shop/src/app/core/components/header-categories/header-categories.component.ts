import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../../models/categories.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.scss']
})
export class HeaderCategoriesComponent implements OnInit {
  public categories$?: Observable<Category[]> = this.productService.getCategories()

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}

}
