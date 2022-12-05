import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produits } from 'src/app/class/produits';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
 
  constructor(private activatedRoute:ActivatedRoute,private produitService: ProduitsService,
    private Cservice:CartserviceService,private router:Router){}
  ngOnInit(): void {
  
}
deconnect()
{
this.router.navigate(['admin/login']);
}
}
