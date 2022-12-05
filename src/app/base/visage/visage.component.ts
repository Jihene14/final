
import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/class/produits';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrls: ['./visage.component.css']
})
export class VisageComponent implements OnInit {
  prod!:Produits[];
  constructor(private produitService:ProduitsService,private cartService:CartserviceService) { }

  ngOnInit(): void {
   this.produitService.getVisage().subscribe(data => this.prod=data);
   
  }

}
