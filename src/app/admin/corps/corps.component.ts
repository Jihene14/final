import { Component } from '@angular/core';
import { Produits } from 'src/app/class/produits';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent {
  prod!:Produits[];
  constructor(private produitService:ProduitsService) { }

  ngOnInit(): void {
   this.produitService.getCorps().subscribe(data => this.prod=data);
   
  }
  onSupprimer(categorie:String,id:number){
    this.produitService.deleteProduit(categorie,id).subscribe();
    }
}
