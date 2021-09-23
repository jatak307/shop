import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() items: Array<Product[]> = [];

  constructor(private router: Router) {}

  public clickGood(id: string) {
    this.router.navigate(['/main/detailed/', id]);
  }
}
