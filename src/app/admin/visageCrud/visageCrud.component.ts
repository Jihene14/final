import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from 'src/app/class/produits';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-visageCrud',
  templateUrl: './visageCrud.component.html',
  styleUrls: ['./visageCrud.component.css']
})
export class VisageCrudComponent {
  prod!:Produits[];
  constructor(private produitService:ProduitsService,private http:HttpClient) { }


  ngOnInit(): void {
   this.produitService.getVisage().subscribe(data => this.prod=data);
   
  }
  onSupprimer(categorie:String,id:number){
    this.produitService.deleteProduit(categorie,id).subscribe();
    }
}


