import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NormalUserComponent } from '../normal-user/normal-user.component';
import { AdminComponent } from '../admin/admin.component';
import { EditPropertyComponent } from '../edit-property/edit-property.component';
//import { AppComponent } from './app.component';
const routes:Route []= [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'normalUser', component:NormalUserComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/edit/:propertyId',component:EditPropertyComponent}


];

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers:[UserService],
  //bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    RouterModule
  ]

})
export class UserAuthModule { }
