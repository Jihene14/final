import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public totale:number=0;
public rechercher:string="";
  constructor(private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProduits().subscribe(data=>{
      this.totale=data.length;//restore le totale de produits dans la panier
    })
  }

search(event:any){
  this.rechercher=(event.target as HTMLInputElement).value;
  console.log(this.rechercher);
  this.cartService.searchterm.next(this.rechercher);
}
}
