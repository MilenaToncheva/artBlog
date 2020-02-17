import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleListModel } from '../models/article-list.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
currentArticle:ArticleListModel
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
   
  }

}
