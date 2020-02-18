import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/auth';
import{Router}from '@angular/router';
import{shareReplay}from 'rxjs/operators';
import{ToastrService} from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token:string=null;


  constructor(private firebase:AngularFireAuth,
    private router:Router,
    private toastr:ToastrService) {
      
    }
  get  isAuthenticated(){

return this.token!=null;
    }

  register(email:string,password:string){
    this.firebase.auth.createUserWithEmailAndPassword(email,password)
    .then((data)=>{
      this.toastr.success('Registered successfully!','Success');
      this.router.navigate(['/users/login']);
    })
    .catch((err)=>{
      this.toastr.error(err.message,'Warning');
    })
  }
  login(email:string,password:string){
    this.firebase.auth.signInWithEmailAndPassword
    (email,password)
    .then((data)=>{
      this.firebase.auth.currentUser
      .getIdToken().then((token)=>{
        this.token=token;
         
      });
      this.router.navigate(['/home']); 
       this.toastr.success('Logged in!', 'Success');         
    })  
    .catch((err)=>{
    this.toastr.error(err.message, 'Warning');
      });
  }
  logout(){ 
      this.firebase.auth.signOut().then( resp=>{
      this.toastr.success('Logged out!','Success');
      this.router.navigate(['']);

this.token=null;
});


  }

getUserState(){
 return this.firebase.authState;
}

 

getToken(){
  let currentUser=this.firebase.auth.currentUser
  .getIdToken().then((token)=>{
this.token=token;
  });
  return this.token;
}

getCurrentUserName(){
  return this.firebase.auth.currentUser.displayName;
  }

}