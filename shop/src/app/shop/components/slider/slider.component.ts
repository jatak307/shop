import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() items: Array<Product[]> = [];

  constructor() {}

  ngOnInit(): void {}
}
