import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((p) => console.log(p.categId));
  }
}
