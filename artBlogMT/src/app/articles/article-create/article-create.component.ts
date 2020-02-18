import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import{ArticleCreateModel}from '../models/article-create.model';
import{NgForm}from '@angular/forms';
@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
bindingModel: ArticleCreateModel
  constructor(
    private articleService:ArticlesService
    ) { 
      this.bindingModel=new ArticleCreateModel("","","","");
    }

  ngOnInit(): void {

  }
  handleArticleCreate(){
    
   this.articleService.createArticle(this.bindingModel);
   

   }

  }
