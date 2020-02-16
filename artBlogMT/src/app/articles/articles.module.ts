import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';



@NgModule({
  declarations: [ ArticlesListComponent, ArticleDetailsComponent,  ArticleCreateComponent],
  imports: [
    CommonModule
  ],
  exports:[ArticlesListComponent, ArticleDetailsComponent,  ArticleCreateComponent]
})
export class ArticlesModule { }
