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
import { ArticleEditComponent } from './article-edit/article-edit.component';

import { ArticlesMineComponent } from './articles-mine/articles-mine.component'


@NgModule({
  declarations: [ 
    ArticlesListComponent, 
    ArticleDetailsComponent,
      ArticleCreateComponent,
       ShortenPipe,
       ArticleEditComponent,
       ArticleEditComponent,
       ArticlesMineComponent],
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
       ArticleEditComponent,
       ArticlesMineComponent,
      ShortenPipe]
})
export class ArticlesModule { }
