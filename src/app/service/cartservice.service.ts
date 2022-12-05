import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
cartlist:any=[];
prod=new BehaviorSubject<any>([]);
searchterm=new BehaviorSubject<string>("");
  constructor() { }
  getProduits(){
    return this.prod.asObservable();
  }
  addpanier(produits:any){
    this.cartlist.push(produits);
    this.prod.next(this.cartlist);
   
    console.log(this.cartlist);
  }
  
  removeprod(produits:any)
  {
    this.cartlist.map((s:any ,index:any)=>{
      if(produits.id===s.id)
      {
        this.cartlist.splice(index,1);
      }
    })
    this.prod.next(this.cartlist); 

  }
  effacertous(){
    this.cartlist=[];
    this.prod.next(this.cartlist);
  }
  
}
