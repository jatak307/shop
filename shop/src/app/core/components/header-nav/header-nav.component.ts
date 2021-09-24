import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Category } from '../../models/categories.model';
import { Product } from '../../models/product.model';
import { SubCategory } from '../../models/subcategory';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  public products$?: Observable<Product[]>;

  public categories$?: Observable<Category[]> = this.productService.getCategories();

  public query = new Subject<string>();

  public category = new Subject<Category>();

  public inputValue: string = '';

  public togglePopup = new Subject<boolean>();

  private showPopup = false;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.query.pipe(debounceTime(700), distinctUntilChanged()).subscribe((value) => {
      if (value.length >= 2) {
        this.products$ = this.productService.getProductsByQuery(value);
      } else {
        this.products$ = undefined;
      }
    });
  }

  public showCategory(category: Category) {
    this.category.next(category);
  }

  public togglePopupMenu() {
    this.showPopup = !this.showPopup;
    this.togglePopup.next(this.showPopup);
  }

  public clickMain() {
    this.router.navigate(['/main']);
  }

  public onClickGood(id: string) {
    this.router.navigate(['/main/detailed/', id]);
    this.query.next('');
    this.products$ = undefined;
    this.inputValue = '';
  }

  public onClickSubCat(id: string) {
    this.clearParams();
    this.productService.getCategories().subscribe((cats) => {
      const cata = cats.filter((cat: Category) => {
        const findCat: SubCategory[] = cat.subCategories.filter((sub) => sub.id === id);
        if (findCat.length >= 1) this.setParams(cat, findCat[0]);
        return findCat.length >= 1;
      });
      [this.productService.actualCategory] = cata;
      this.router.navigate(['/main/', cata[0], id]);
    });
    this.togglePopupMenu();
  }

  private setParams(cat: Category, subcat: SubCategory) {
    this.productService.actualSubCategoryId = subcat;
    this.productService.actualCategory = cat;
  }

  private clearParams() {
    this.productService.actualSubCategoryId = undefined;
    this.productService.actualCategory = undefined;
  }
}
