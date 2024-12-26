import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerEtudiantsComponent } from './lister-etudiants/lister-etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AfficherEtudiantComponent } from './afficher-etudiant/afficher-etudiant.component';
import { ListerEtablissementsComponent } from './lister-etablissements/lister-etablissements.component';
import { AjouterEtablissementComponent } from './ajouter-etablissement/ajouter-etablissement.component';
import { AfficherEtablissementComponent } from './afficher-etablissement/afficher-etablissement.component';

const routes: Routes = [
  // Routes pour les étudiants
  { path: 'lister-etudiants', component: ListerEtudiantsComponent },
  { path: 'ajouter-etudiant', component: AjouterEtudiantComponent },
  { path: 'afficher-etudiant/:id', component: AfficherEtudiantComponent },

  // Routes pour les établissements
  { path: 'lister-etablissements', component: ListerEtablissementsComponent },
  { path: 'ajouter-etablissement', component: AjouterEtablissementComponent },
  { path: 'afficher-etablissement/:id', component: AfficherEtablissementComponent },

  // Route par défaut
  { path: '', redirectTo: '/lister-etudiants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
