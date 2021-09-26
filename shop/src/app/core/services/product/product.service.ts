/* eslint-disable array-callback-return */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Category } from '../../models/categories.model';
import { Product } from '../../models/product.model';
import { SubCategory } from '../../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public actualCategory?: Category;

  public actualSubCategory?: SubCategory;

  private allProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:3004/categories`);
  }

  public getProductsByQuery(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3004/goods/search?text=${query}`);
  }

  public getCategoryById(categoryId: string): Observable<Category[]> {
    return this.http.get<Category[]>(
      `http://localhost:3004/goods/category/${categoryId}`,
    );
  }

  public getSubCategory(
    categoryId: string,
    subCategoryId: string,
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:3004/goods/category/${categoryId}/${subCategoryId}`,
    );
  }

  public getItemById(itemId: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3004/goods/item/${itemId}`);
  }

  public getSubCategories(): Observable<Observable<unknown>[]> {
    return this.getCategories().pipe(
      switchMap((response: Category[]) => {
        const res = response.map((cat) => {
          return cat.subCategories.map((sub) => {
            return this.http.get<Product[]>(
              `http://localhost:3004/goods/category/${cat.id}/${sub.id}`,
            );
          });
        });
        return res;
      }),
    );
  }

  public getProductsForSlider(
    categoryId: string,
    subCategoryId: string,
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:3004/goods/category/${categoryId}/${subCategoryId}?start=1&count=1`,
    );
  }

  public getAllProducts() {
    this.getCategories().subscribe((data) => {
      data.forEach((categ) => {
        categ.subCategories.map((subC) => {
          this.getSubCategory(categ.id, subC.id).subscribe((dataProducts) => {
            const ar = dataProducts.filter((el) => el.rating >= 4);
            this.allProducts.push(...ar);
          });
        });
      });
    });
  }
}
