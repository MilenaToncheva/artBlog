import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import{ArticleCreateModel}from '../models/article-create.model';
import{NgForm}from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
bindingModel: ArticleCreateModel
  constructor(
    private articleService:ArticlesService,
    private toastr:ToastrService,
    private router:Router
    ) { 
      this.bindingModel=new ArticleCreateModel("","","","","");
    }

  ngOnInit(): void {

  }
  handleArticleCreate(){
    console.log(this.bindingModel);
   this.articleService.createArticle(this.bindingModel)
   .subscribe(()=>{
    this.toastr.success('Article created','Success');
    this.router.navigate(['/articles/all']);
  });
   

   }

  }
