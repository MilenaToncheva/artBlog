import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/auth';
import{Router}from '@angular/router';
import{ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated:boolean=false;

  constructor(public afAuth:AngularFireAuth,
    private router:Router,
    private toastr:ToastrService) {
      
    }

  register(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
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
      this.router.navigate(['/home']);
      localStorage.setItem('email',data.user.email);
      this.toastr.success('Logged in!', 'Success');
        })
    .catch((err)=>{
    this.toastr.error(err.message, 'Warning');
      });
  }
  logout(){
this.afAuth.auth.signOut();
localStorage.clear();
this.router.navigate(['/']);
  }

  checkAuthentication() {
    this.afAuth.authState.subscribe((userState) => {
      if(userState) {
        this.isAuthenticated= true;
       
      } else {
        this.isAuthenticated= false;
        
      }
    });
  }
}
