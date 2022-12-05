import { SelectProduitComponent } from './select-produit/select-produit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './base/accueil/accueil.component';
import { ConnexionComponent } from './base/connexion/connexion.component';
import { CartComponent } from './base/cart/cart.component';
import { ContactComponent } from './base/contact/contact.component';
import { InscriptionComponent } from './base/inscription/inscription.component';
import { VisageComponent } from './base/visage/visage.component';
import { CheveuxComponent } from './base/cheveux/cheveux.component';
import { CorpsComponent } from './base/corps/corps.component';
import { AboutUsComponent } from './base/about-us/about-us.component';
const routes: Routes = [
  {path:'',title:'Accueil',component:AccueilComponent ,pathMatch:'full'},
  {path:'accueil',title:'Accueil',component:AccueilComponent },
  {path:'contact',title:'Contact',component:ContactComponent },
  {path:'panier',title:'Panier',component:CartComponent},
  {path:'connexion',title:'CONNEXION',component:ConnexionComponent },
  {path:'inscription',title:'Inscription',component:InscriptionComponent},
  {path:'visage',title:'visage',component:VisageComponent},
  {path:'cheveux',title:'Soins cheveux',component:CheveuxComponent},
  {path:'corps',title:'Soins Corps',component:CorpsComponent},
  {path:'AboutUs',title:'Apropos de Nous',component:AboutUsComponent},
  {path:'produit/:categorie/:id',title:'Produit choisi',component:SelectProduitComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
