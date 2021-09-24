import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCategoriesComponent } from './components/header-categories/header-categories.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderInfoComponent,
    HeaderNavComponent,
    HeaderCategoriesComponent,
    FooterComponent,
  ],
  imports: [SharedModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
