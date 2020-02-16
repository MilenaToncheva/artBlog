import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import{Router}from'@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isAuthenticated:boolean=false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
   this.authService.getUserState().subscribe((user)=>this.isAuthenticated=!!user);
  }
  
}
