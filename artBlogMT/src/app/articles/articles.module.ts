import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShortenPipe } from './shorten.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms';
import{RouterModule}from'@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component'


@NgModule({
  declarations: [ 
    ArticlesListComponent, 
    ArticleDetailsComponent,
      ArticleCreateComponent,
       ShortenPipe,
       EditArticleComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ],
  exports:[
    ArticlesListComponent,
     ArticleDetailsComponent,
       ArticleCreateComponent,
      ShortenPipe]
})
export class ArticlesModule { }
