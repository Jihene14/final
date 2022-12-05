import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from './class/produits';
const URL = "http://localhost:3000/admin";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connected = false;
  role:string="";
  constructor(private http:HttpClient) { }  

  
  /*login(login:string, pwd:string):Observable<Produits[]>{
    return this.http.get<Produits[]>(URL+"?username="+login+"&pwd="+pwd);
  }*/

  logindata(email:string,pwd:string)
  {
    if(email=="admin" && pwd=="admin")
    this.role="admin";
    else
    this.role="rien";
    return this.role;
  }
  
}
