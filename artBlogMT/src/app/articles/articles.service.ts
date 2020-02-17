import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './models/article';
import { ArticleListModel } from './models/article-list.model';
import { map } from 'rxjs/operators';
import { ArticleCreateModel } from './models/article-create.model';
import { ArticleCreateComponent } from './article-create/article-create.component';

const baseUrl:string="https://ng-artblog.firebaseio.com/articles";
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private http:HttpClient) { }


  createArticle(article:ArticleCreateModel){
return this.http.post(`${baseUrl}.json`,article);
  }

  getArticleById(id:string){
   return this.http.get<ArticleListModel>(`${baseUrl}${id}.json`);
  }
  editArticle(article:ArticleCreateComponent){
    return this.http.patch(`${baseUrl}.json`,article);
  }
  deleteArticle(id:string){
    return this.http.delete(`${baseUrl}${id}.json`);
  }

  getAllArticles(){
    return this.http.get(`${baseUrl}.json`).pipe(
map((res:Response) => {
const ids=Object.keys(res);
const articles:ArticleListModel[]=[];
for(let id of ids){
  articles.push(
    new ArticleListModel(id, res[id].title, res[id].imageUrl, res[id].authorId, res[id].authorName, res[id].content)
     
  )
}
return articles;
    }));
  }


}
