import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  public products$?: Observable<Product[]>;

  public query = new Subject<string>();

  public inputValue: string = '';

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.query.pipe(debounceTime(700), distinctUntilChanged()).subscribe((value) => {
      if (value.length >= 2) {
        this.products$ = this.productService.getProductsByQuery(value);
      } else {
        this.products$ = undefined;
      }
    });
  }
}
