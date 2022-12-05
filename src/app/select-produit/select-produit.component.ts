import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produits } from '../class/produits';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commentaire } from '../class/comment';
import { ProduitsService } from '../service/produits.service';
import { CartserviceService } from '../service/cartservice.service';
import { CommentaireserviceService } from '../service/commentservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-select-produit',
  templateUrl: './select-produit.component.html',
  styleUrls: ['./select-produit.component.css']
})


export class SelectProduitComponent implements OnInit {
prod!:Produits;
cat!:string;
idProduit!:any;
product!:Produits;
commentform!:FormGroup;
pubcommentaire!:Commentaire;



  constructor(private commentservice:CommentaireserviceService,private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,private produitService: ProduitsService,private Cservice:CartserviceService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.cat = this.activatedRoute.snapshot.params['categorie'];
    this.produitService.getProduitsType({ type: this.cat, id: this.idProduit }).subscribe(data => this.prod = data)
    this.commentform=this.fb.group({
      userid:[''],
      username:[''],
      commentaire:['']
    })

  }
  addpanier(){
    this.Cservice.addpanier(this.prod);
    }
    onSubmit(){
      this.pubcommentaire=new Commentaire(
        this.commentform.controls['userid'].value,
        this.commentform.controls['username'].value,
        this.commentform.controls['commentaire'].value,
        
    
      );

      console.log(this.pubcommentaire);
      this.produitService.addcomment(this.commentform.value,this.cat,this.idProduit).subscribe(data => console.log(data));


}

}
