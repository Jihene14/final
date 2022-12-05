import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './base/menu/menu.component';
import { AccueilComponent } from './base/accueil/accueil.component';
import { ConnexionComponent } from './base/connexion/connexion.component';
import { CartComponent } from './base/cart/cart.component';
import { ContactComponent } from './base/contact/contact.component';
import { InscriptionComponent } from './base/inscription/inscription.component';

import {HttpClientModule} from "@angular/common/http";
import { VisageComponent } from './base/visage/visage.component';
import { CheveuxComponent } from './base/cheveux/cheveux.component';
import { CorpsComponent } from './base/corps/corps.component';
import { SelectProduitComponent } from './select-produit/select-produit.component';
import { FooterComponent } from './base/footer/footer.component';
import { AboutUsComponent } from './base/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import{AngularFireModule}from '@angular/fire/compat';

import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { DecoPipe } from './deco.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ConnexionComponent,
    CartComponent,
    ContactComponent,
    InscriptionComponent,
    VisageComponent,
    CheveuxComponent,
    CorpsComponent,
    SelectProduitComponent,
    FooterComponent,
    AboutUsComponent,
    DecoPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
