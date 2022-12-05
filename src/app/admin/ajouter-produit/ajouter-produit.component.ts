import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {
  cat:any;
  productForm!:FormGroup;
  constructor(private fb:FormBuilder,private produitService:ProduitsService){}
  ngOnInit(): void {

  this.productForm = this.fb.group(
    { id:[0],
      categorie:[""],
      libelle:[''],
     prix:[0 ],
     datedeposer:[""],
     promo:[""],
     details:[""]

  } );
this.cat=this.productForm.value.categorie;

}

onAjouter(){
  this.produitService.addProduit(this.productForm.value,this.productForm.value.categorie)
  .subscribe(data => console.log(data));
  }
  
}
