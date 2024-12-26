import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListerEtudiantsComponent } from './lister-etudiants/lister-etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AfficherEtudiantComponent } from './afficher-etudiant/afficher-etudiant.component';
import { ListerEtablissementsComponent } from './lister-etablissements/lister-etablissements.component';
import { AjouterEtablissementComponent } from './ajouter-etablissement/ajouter-etablissement.component';
import { AfficherEtablissementComponent } from './afficher-etablissement/afficher-etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerEtudiantsComponent,
    AjouterEtudiantComponent,
    AfficherEtudiantComponent,
    ListerEtablissementsComponent,
    AjouterEtablissementComponent,
    AfficherEtablissementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
