import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../models/categories.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`http://localhost:3004/categories`)
      .pipe((res) => res);
  }

  public getProductsByQuery(query: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`http://localhost:3004/goods/search?text=${query}`)
      .pipe((res) => res);
  }

  public getProductsForSlider(
    categoryId: string,
    subCategoryId: string,
  ): Observable<Product[]> {
    return this.http
      .get<Product[]>(
        `http://localhost:3004/goods/category/${categoryId}/${subCategoryId}?start=1&count=1`,
      )
      .pipe(map((res) => res));
  }
}
