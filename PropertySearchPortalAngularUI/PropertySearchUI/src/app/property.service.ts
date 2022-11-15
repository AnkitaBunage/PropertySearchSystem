import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
 

  constructor(private http:HttpClient, private _router:Router) { }
  
  BASE_URL="http://localhost:8880/propertysystem/"

  searchProperty(searchProperty:any){
    let params = new HttpParams();

   params = params.append("ownerFirstName",searchProperty.ownerFirstName),

   params = params.append("ownerLastName",searchProperty.ownerLastName),

   params = params.append("propertyAddress",searchProperty.propertyAddress),

   params = params.append("propertyType",searchProperty.propertyType)

  return this.http.get(this.BASE_URL+'searchProperty',{params});
  
  }
  addProperty(addProperty:any) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.post(this.BASE_URL+'addProperty',addProperty , {
      headers: {
        Authorization: 'Bearer ' 
      }
    })
  }

  deleteProperty(prop_id: any) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.post(this.BASE_URL+'addProperty' , {
      headers: {
        Authorization: 'Bearer ' 
      }
    })
  }

  
  
  
  success()
{
  return "success"
}
}
