import { Component } from '@angular/core';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement';


@Component({
  selector: 'app-ajouter-etablissement',
  templateUrl: './ajouter-etablissement.component.html',
  styleUrls: ['./ajouter-etablissement.component.css']
})
export class AjouterEtablissementComponent {
  id: number = 0;
  nom: string = '';

  constructor(private etablissementService: EtablissementService) { }

  ajouterEtablissement(): void {
    const newEtablissement = new Etablissement(this.id, this.nom);
    this.etablissementService.ajouterEtablissement(newEtablissement);
    this.id = 0;
    this.nom = '';
  }
}
