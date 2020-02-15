import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/articles/list'
  },
  {
    path:'home',
    component:ArticlesListComponent
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
      component:LogoutComponent
    }
    ]},
    
    {
      path:'articles',
      children:[
        {
          path:'create',
          component:ArticleCreateComponent
        },
        {
          path:'details/:id',
          component:ArticleDetailsComponent
        },
        {
          path:'list',
          component:ArticlesListComponent
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
