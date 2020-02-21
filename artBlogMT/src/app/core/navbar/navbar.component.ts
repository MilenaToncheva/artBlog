import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import{Router}from'@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ArticlesService } from 'src/app/articles/articles.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
currentUserEmail:string;

  constructor(private authService:AuthService,
    ) { }

  ngOnInit(): void {
  this.currentUserEmail=this.getUserEmail();
 
  }
  checkAuthentication():boolean{
return this.authService.isAuthenticated;

  }
  getUserEmail(){

  const email=this.authService.getCurrentUserEmail();
  
    return email;
  }
}
