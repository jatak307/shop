import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  public product$ = new Subject<Product>();

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((par) => {
      this.productService.getItemById(par.itemId).subscribe((res) => {
        this.product$.next(res);
      });
    });
  }
}
