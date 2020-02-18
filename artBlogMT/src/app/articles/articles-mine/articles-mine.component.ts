import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs';
import { ArticleListModel } from '../models/article-list.model';

@Component({
  selector: 'app-articles-mine',
  templateUrl: './articles-mine.component.html',
  styleUrls: ['./articles-mine.component.scss']
})
export class ArticlesMineComponent implements OnInit {
  articles$:Observable<ArticleListModel[]>
  constructor(private articlesService:ArticlesService,
    ) { }

  ngOnInit(): void {

    this.articles$=this.articlesService.getMyArticles();
  }

}
