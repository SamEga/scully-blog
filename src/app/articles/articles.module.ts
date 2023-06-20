import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
