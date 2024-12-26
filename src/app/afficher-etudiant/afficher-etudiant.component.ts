import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

import { EtablissementService } from '../services/etablissement.service';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-afficher-etudiant',
  templateUrl: './afficher-etudiant.component.html',
  styleUrls: ['./afficher-etudiant.component.css']
})
export class AfficherEtudiantComponent implements OnInit {
  etudiant: Etudiant | undefined;
  etablissementNom: string = '';

  constructor(
    private route: ActivatedRoute,
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.etudiant = this.etudiantService.getEtudiant(id);
    if (this.etudiant && this.etudiant.idEtablissement) {
      const etablissement = this.etablissementService.getEtablissement(this.etudiant.idEtablissement);
      this.etablissementNom = etablissement ? etablissement.nom : 'Non défini';
    }
  }
}
