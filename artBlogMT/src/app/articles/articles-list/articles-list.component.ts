import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import{Router}from '@angular/router'

import{Observable}from 'rxjs';
import{ArticleListModel}from '../models/article-list.model'
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
articles$:Observable<ArticleListModel[]>
  constructor(private articlesService:ArticlesService,
    ) { }

  ngOnInit(): void {
    this.articles$=this.articlesService.getAllArticles();
   
  }

}
