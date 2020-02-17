import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import{NgForm}from '@angular/forms';
@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  constructor(private articleService:ArticlesService,
    private afAuth:AngularFireAuth
    ) { }

  ngOnInit(): void {

  }
  handleArticleCreate(f:NgForm){
    const{title,imageUrl,content} =f.value;
    const authorId=this.afAuth.auth.currentUser.id;
    const authorName=this.afAuth.auth.currentUser.username;

  }

}
