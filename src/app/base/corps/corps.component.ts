import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/class/produits';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {
  prod!:Produits[];
  searchkey:string="";
  constructor(private produitService:ProduitsService,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.produitService.getCorps().subscribe(data => this.prod=data);
    this.cartService.searchterm.subscribe((val:any)=>{
      this.searchkey=val;
    })

}
}
