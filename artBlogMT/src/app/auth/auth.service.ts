import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/auth';
import{Router}from '@angular/router';
import{shareReplay}from 'rxjs/operators';
import{ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token:string=null;
currentUser:any=null;

  constructor(private afAuth:AngularFireAuth,
    private router:Router,
    private toastr:ToastrService) {
      
    }
    get isAuthenticated(){
return !!this.currentUser;
    }

  register(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((data)=>{
      this.toastr.success('Registered successfully!','Success');
      this.router.navigate(['/users/login']);
    })
    .catch((err)=>{
      this.toastr.error(err.message,'Warning');
    })
  }
  login(email:string,password:string){
    this.afAuth.auth
    .signInWithEmailAndPassword(email,password)
    .then((data)=>{
         this.currentUser=this.afAuth.auth.currentUser;
      this.router.navigate(['/home']);
     
      this.toastr.success('Logged in!', 'Success');
      
        })
    .catch((err)=>{
    this.toastr.error(err.message, 'Warning');
      });
  }
  logout(){ 
this.afAuth.auth.signOut();
this.currentUser=null;
this.token=null;
this.router.navigate(['/']);

  }

getUserState(){
 return this.afAuth.authState;
}
  getToken(){
    this.afAuth.auth.currentUser
    .getIdToken()
    .then((token:string)=>{
      this.token=token;
    })
    return this.token;
  }
}
