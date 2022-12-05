import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/class/produits';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 prod!:Produits[];
 
  constructor(private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProduits().subscribe(data=>{this.prod=data;//restore all data
     
    }
      ) 
   
  }
  //effacer un produit selon le choix
  removeproduit(p:any)
  {this.cartService.removeprod(p);}
  //effacer tous les produit
  deletecart(){
     this.cartService.effacertous();
  }
}
