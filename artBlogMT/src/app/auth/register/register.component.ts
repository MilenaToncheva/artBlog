import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

  }
registerHandler(form:NgForm){
  const {email,password}=form.value;
  this.authService.register(email,password);
  }

}
