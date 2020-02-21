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
  articles:ArticleListModel[]
  constructor(private articlesService:ArticlesService,
    ) { }

  ngOnInit(): void {

    this.articlesService.getMyArticles().subscribe((data)=>{
      this.articles=data;
    });
    
  }

}
