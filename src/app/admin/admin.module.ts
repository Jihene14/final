import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';

import { MenuAdminComponent } from './menu-admin/menu-admin.component';

import { CorpsComponent } from './corps/corps.component';
import { CheveuxComponent } from './cheveux/cheveux.component';

import { VisageCrudComponent } from './visageCrud/visageCrud.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';


@NgModule({
  declarations: [
    LoginComponent,
    AccueilComponent,
    AdminComponent,
    
    MenuAdminComponent,
    VisageCrudComponent,
    CorpsComponent,
    CheveuxComponent,
   
    ForgotPassComponent,
    ModifierProduitComponent,
    AjouterProduitComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,


    
  ]
})
export class AdminModule { }
