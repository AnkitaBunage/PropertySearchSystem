import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';

//import module
import { UserAuthModule } from './user-auth/user-auth.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './user-auth/signup/signup.component';
import { LoginComponent } from './user-auth/login/login.component';

import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SigninComponent } from './user-auth/signin/signin.component';
const routes:Route []= [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'normalUser', component:NormalUserComponent},
  {path:'admin', component:AdminComponent},
  {path:'login/signup', component:SignupComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NormalUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
