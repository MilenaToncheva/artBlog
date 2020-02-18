import { Component, OnInit } from '@angular/core';
import{ArticleCreateModel}from '../models/article-create.model'
import { ArticlesService } from '../articles.service';
import{ActivatedRoute}from'@angular/router';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
bindingModel:ArticleCreateModel;
id:string;
  constructor(
    private articlesService:ArticlesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.articlesService.getArticleById(this.id)
    .subscribe((data)=>{
      this.bindingModel=data;
    })
  }
  articleEditHandler(){
    const body={
      [this.id]:this.bindingModel
      }
      this.articlesService.editArticle(body);
    }
  
  }


