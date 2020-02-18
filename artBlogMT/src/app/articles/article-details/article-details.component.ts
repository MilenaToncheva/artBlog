import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleListModel } from '../models/article-list.model';
import{ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
article:ArticleListModel;
id:string;
  constructor(private articlesService:ArticlesService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this.activatedRoute.snapshot.params.id;
   this.articlesService.getArticleById(this.id).subscribe((data)=>{
     this.article=data;
   });
  }
deleteArticle(){
  this.articlesService.deleteArticle(this.id);
}
}
