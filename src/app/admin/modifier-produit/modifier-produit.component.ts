import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent {
  modifierForm!:FormGroup;
  constructor(private produitService:ProduitsService){}
  onModifier(id:number,type:string){
    this.produitService.updateProduit(id,type,this.modifierForm.value)
    .subscribe(data => console.log(data));
    }
    

}
