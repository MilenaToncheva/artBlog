import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './articles/home/home.component';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
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
      path:'',
      component:HomeComponent
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
