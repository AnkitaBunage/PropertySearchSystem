import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  BASE_URL="http://localhost:8880/api/v1/auth/"
  signin(user:{username:string;password:string;}) {
    return this.http.post(this.BASE_URL+'signin',user);
  }
  signup(user:{username:string;password:string;email:string;}) {
    return this.http.post(this.BASE_URL+'signup',user);
  }
  success()
{
  return "success"
}
}
