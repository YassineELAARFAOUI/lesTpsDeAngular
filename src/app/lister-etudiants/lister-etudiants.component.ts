import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { EtablissementService } from '../services/etablissement.service';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-lister-etudiants',
  templateUrl: './lister-etudiants.component.html',
  styleUrls: ['./lister-etudiants.component.css']
})
export class ListerEtudiantsComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiants();
  }

  getEtablissement(idEtablissement: number): string {
    const etablissement = this.etablissementService.getEtablissement(idEtablissement);
    return etablissement ? etablissement.nom : 'Non défini';
  }
}
