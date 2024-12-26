import { Injectable } from '@angular/core';
import { EtablissementService } from './etablissement.service';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantEtablissementService {
  private etudiants: Etudiant[] = [
    new Etudiant(1, 'Yassine', 'Elaarfaoui', '12345'),
    new Etudiant(2, 'Ahmed', 'Tariq', '67890')
  ];

  constructor(private etablissementService: EtablissementService) { }

  // Associer un étudiant à un établissement
  associerEtablissement(etudiantId: number, etablissementId: number): Etudiant | undefined {
    const etudiant = this.etudiants.find(e => e.id === etudiantId);
    if (etudiant) {
      // Vérifier si l'établissement existe
      const etablissement = this.etablissementService.getEtablissement(etablissementId);
      if (etablissement) {
        etudiant.idEtablissement = etablissement.id;  // Association
        return etudiant;
      }
    }
    return undefined;
  }

  // Récupérer un étudiant par ID
  getEtudiant(id: number): Etudiant | undefined {
    return this.etudiants.find(e => e.id === id);
  }

  // Récupérer tous les étudiants
  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }
}
