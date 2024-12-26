import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

import { EtablissementService } from '../services/etablissement.service';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  id: number = 0;
  nom: string = '';
  prenom: string = '';
  numeroEtudiant: string = '';
  idEtablissement: number = 0;

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) { }

  ajouterEtudiant(): void {
    const newEtudiant = new Etudiant(this.id, this.nom, this.prenom, this.numeroEtudiant, this.idEtablissement);
    this.etudiantService.ajouterEtudiant(newEtudiant);
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.numeroEtudiant = '';
    this.idEtablissement = 0;
  }
}
