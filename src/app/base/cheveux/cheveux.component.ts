import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/class/produits';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-cheveux',
  templateUrl: './cheveux.component.html',
  styleUrls: ['./cheveux.component.css']
})
export class CheveuxComponent implements OnInit {
  prod!:Produits[];
searchkey:string="";
  constructor(private produitService:ProduitsService,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.produitService.getCheveux().subscribe(data => this.prod=data);
 this.cartService.searchterm.subscribe((val:any)=>{
      this.searchkey=val;
  });
}
}
