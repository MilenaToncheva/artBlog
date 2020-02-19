import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticlesMineComponent } from './articles/articles-mine/articles-mine.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/index'
  },
  {
    path:'index',
    component:ArticlesListComponent,
   
  },
  {
    path:'home',
    component:ArticlesListComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'users', children:[
    {
    path:'register',
    component:RegisterComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'logout',
      component:LogoutComponent,
      canActivate:[AuthGuard]
    }
    ]},
    
    {
      path:'articles',
      children:[
        {
          path:'create',
          component:ArticleCreateComponent,
          canActivate:[AuthGuard]
        },
        {
          path:'details/:id',
          component:ArticleDetailsComponent,
          canActivate:[AuthGuard]
        },
        {
          path:'edit/:id',
          component: ArticleEditComponent,
          canActivate:[AuthGuard]
        },
        {
          path:'all',
          component:ArticlesListComponent
        }
        ,{
          path:'my-articles',
          component:ArticlesMineComponent,
          canActivate:[AuthGuard]
        }
       
      ]
    },
    {
      path:'**',
      component:NotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
