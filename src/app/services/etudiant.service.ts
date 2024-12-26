import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [
  ];

  constructor() { }

  // Récupérer la liste des étudiants
  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }

  // Ajouter un nouvel étudiant
  ajouterEtudiant(etudiant: Etudiant): void {
    this.etudiants.push(etudiant);
  }

  // Récupérer un étudiant par ID
  getEtudiant(id: number): Etudiant | undefined {
    return this.etudiants.find(e => e.id === id);
  }
}
