import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../class/comment';
import { Produits } from '../class/produits';
const  URL= 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {


  constructor(public http:HttpClient) { }

  getVisage(): Observable <Produits[]> {
 return this.http.get<Produits[]>(URL+'/visage');
  }
  getCheveux(): Observable <Produits[]> {
    return this.http.get<Produits[]>(URL+'/cheveux');
     }
     getCorps(): Observable <Produits[]> {
      return this.http.get<Produits[]>(URL+'/corps');
       }
    
getProduitsType({ type, id }: { type: string; id: number; }):Observable<Produits>{
  return this.http.get<Produits>(URL+"/"+type+"/"+id);

}
getProduitsCat({ type}: { type: string; }):Observable<Produits[]>{
  return this.http.get<Produits[]>(URL+"/"+type);

}
addProduit(p:Produits,type:string):Observable<Produits>{
  return this.http.post<Produits>(URL+"/"+type,p);
  }

  deleteProduit(categorie:String,id:number): Observable<Object>{
    return this.http.delete(URL+"/"+categorie+"/"+id);
    }
    addcomment(c:Commentaire,cat:string,id:number):Observable<Commentaire>{
      return this.http.post<Commentaire>( "http://localhost:3000"+"/"+cat+"/"+id, c);
      
    }
    updateProduit(id:number,type:string, p:Produits):Observable<Produits>{
      return this.http.put<Produits>(URL+"/"+type+"/"+ id, p);
      }
      
}
