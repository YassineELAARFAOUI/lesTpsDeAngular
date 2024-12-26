import { Injectable } from '@angular/core';
import { Etablissement } from '../models/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private etablissements: Etablissement[] = [
    new Etablissement(1, 'Université de Paris'),
    new Etablissement(2, 'Université de Lyon')
  ];

  constructor() { }

  // Récupérer la liste des établissements
  getEtablissements(): Etablissement[] {
    return this.etablissements;
  }

  // Ajouter un nouvel établissement
  ajouterEtablissement(etablissement: Etablissement): void {
    this.etablissements.push(etablissement);
  }

  // Récupérer un établissement par ID
  getEtablissement(id: number): Etablissement | undefined {
    return this.etablissements.find(e => e.id === id);
  }
}
