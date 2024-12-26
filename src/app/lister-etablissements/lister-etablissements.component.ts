import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement';

@Component({
  selector: 'app-lister-etablissements',
  templateUrl: './lister-etablissements.component.html',
  styleUrls: ['./lister-etablissements.component.css']
})
export class ListerEtablissementsComponent implements OnInit {
  etablissements: Etablissement[] = [];

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit(): void {
    this.etablissements = this.etablissementService.getEtablissements();
  }
}
