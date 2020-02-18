import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule,HTTP_INTERCEPTORS, HttpClient}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule}from '@angular/forms';


// for toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { environment } from 'src/environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import{BsDropdownModule}from 'ngx-bootstrap/dropdown';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { ArticlesModule } from './articles/articles.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { TokenInterceptor } from './interceptors/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MDBBootstrapModule,
   BsDropdownModule.forRoot(),
    CoreModule,
    AuthModule,
    ArticlesModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
