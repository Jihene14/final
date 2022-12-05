import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from 'src/app/class/produits';
import { ProduitsService } from 'src/app/service/produits.service';
const url = 'http://localhost:3000/cheveux';
@Component({
  selector: 'app-cheveux',
  templateUrl: './cheveux.component.html',
  styleUrls: ['./cheveux.component.css']
})
export class CheveuxComponent {
  prod!:Produits[];
  

  constructor(private produitService:ProduitsService,private http:HttpClient) { }

  ngOnInit(): void {
   this.produitService.getCheveux().subscribe(data => this.prod=data);
   //this.produitService.addProduit(this.prodForm.value)
 //.subscribe (data => console.log(data));
  }
  onSupprimer(categorie:String,id:number){
    this.produitService.deleteProduit(categorie,id).subscribe();
    }
}
   

