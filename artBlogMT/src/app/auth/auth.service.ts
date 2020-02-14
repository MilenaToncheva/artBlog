import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/auth';
import{Router}from '@angular/router';
import{ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth,
    private router:Router,
    private toastr:ToastrService) {
      
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
}
