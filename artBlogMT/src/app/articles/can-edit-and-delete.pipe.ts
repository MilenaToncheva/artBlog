import { Pipe, PipeTransform } from '@angular/core';
import { ArticleCreateModel } from './models/article-create.model';
import { AuthService } from '../auth/auth.service';

@Pipe({
  name: 'canEditAndDelete'
})
export class CanEditAndDeletePipe implements PipeTransform {
constructor(private authService:AuthService){}
  transform(article:ArticleCreateModel): unknown {
    return article.authorEmail===this.authService.getCurrentUserEmail()&&this.authService.isAuthenticated;
  }

}
