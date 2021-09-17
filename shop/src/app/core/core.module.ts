import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderCategoriesComponent } from './components/header-categories/header-categories.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderInfoComponent,
    HeaderNavComponent,
    HeaderCategoriesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
