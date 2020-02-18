import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { ArticleCreateModel } from '../models/article-create.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  bindingModel:ArticleCreateModel;
  id:string;
    constructor(
      private articlesService:ArticlesService,
      private route:ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params.id;
      console.log(this.id);
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
