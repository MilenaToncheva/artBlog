import { Injectable, IterableDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router}from '@angular/router';
import{ToastrService}from 'ngx-toastr';

import { ArticleListModel } from './models/article-list.model';
import { map } from 'rxjs/operators';
import { ArticleCreateModel } from './models/article-create.model';
import { ArticleCreateComponent } from './article-create/article-create.component';

const baseUrl:string="https://ng-artblog.firebaseio.com/articles/";
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private http:HttpClient,
    private toastr:ToastrService,
    private router:Router
    ) { }


  createArticle(article:ArticleCreateModel){
return this.http.post(`${baseUrl}.json`,article);
  }

  getArticleById(id:string){
   return this.http.get<ArticleListModel>(`${baseUrl}${id}/.json`);
  
  }
  editArticle(article){
    return this.http.patch(`${baseUrl}.json`,article)
    .subscribe(()=>{
      this.toastr.success('Article edited!','Success');
      this.router.navigate(['/articles/all']);
    });
  }
  deleteArticle(id:string){
    return this.http.delete(`${baseUrl}${id}.json`).
    subscribe(()=>{
      this.toastr.success('Article deleted!','Success');
      this.router.navigate(['/articles/all']);
    });
  }

  getAllArticles(){
   
  return this.http.get(`${baseUrl}.json`).pipe(
   map((res:Response)=>{
     const ids=Object.keys(res);
     const articles:ArticleListModel[]=[];
     for (const id of ids) {
       articles.push({id,...res[id]});
     }
   for(let i in articles){
     console.log(articles[i].title);
   }
     
     return articles;
   }))

   
  }


}
