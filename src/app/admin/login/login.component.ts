import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Produits } from 'src/app/class/produits';
import { Admin } from '../admin';
import { AdminServiceService } from '../service/admin-service.service';
const url="http://localhost:3000/admin";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
message:string="";

public get Mail()
{ return this.loginForm.get('email'); }

public get password()
{ return this.loginForm.get('password'); }
  constructor(private fb:FormBuilder,private authService:AuthService,
    private router:Router,private http:HttpClient,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  
  /*getAdmin(): Observable <admin[]> {
    return this.http.get<Produits.admin[]>(URL+'/admin');
     }*/
     
     admin!:Admin[];
  logindata(){
  console.log(this.loginForm.value);
  //this.adminService.getAdmin().subscribe(data => this.admin=data);
  if (this.loginForm.value['email']=="eyji" && this.loginForm.value['password']=="eyji")
  {
    this.router.navigate(['admin/accueil'])
  }
 else
 this.message="echec d'authentification";
    
  
  } 
}
