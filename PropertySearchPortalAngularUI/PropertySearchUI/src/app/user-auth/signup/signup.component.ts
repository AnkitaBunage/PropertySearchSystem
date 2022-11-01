import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterData } from 'src/app/models/registerdata';
import { RoleData } from 'src/app/models/roledata';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:"ankita",
    password:"1234$",
    email:"aa@gmail.com",
    role:[ "" ]
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  roles : RoleData[] = [
    {roleId : 1, roleName : "Admin"},
    {roleId : 2, roleName : "User"}
  ];
  constructor(private userservice:UserService,private router:Router,private fb:FormBuilder) { 
    this.signup();
  }
  RegisterDataModel: RegisterData = new RegisterData();
  ngOnInit(): void {
  }
  

signup(){
  
  const observable:Observable<any>=this.userservice.signup(this.user);
  observable.subscribe(
    (response:any)=>{
      console.log(response);
      
    },
    function(error){
      console.log("SignUp fails"+error);
    },
    ()=>{this.router.navigate(['signin']);
  }
  )
}
}
