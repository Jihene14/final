import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { CheveuxComponent } from './cheveux/cheveux.component';
import { CorpsComponent } from './corps/corps.component';

import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { VisageCrudComponent } from './visageCrud/visageCrud.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,
 
  children:[{path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'accueil',component:AccueilComponent},
  
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'visageCrud',component:VisageCrudComponent},
  {path:'corps',component:CorpsComponent},
  {path:'cheveux',component:CheveuxComponent},
  {path:'modifierProduit',component:ModifierProduitComponent},
  {path:'ajouterProduit',component:AjouterProduitComponent}

  
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
