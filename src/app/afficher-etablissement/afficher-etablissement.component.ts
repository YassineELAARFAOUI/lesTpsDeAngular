import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement';


@Component({
  selector: 'app-afficher-etablissement',
  templateUrl: './afficher-etablissement.component.html',
  styleUrls: ['./afficher-etablissement.component.css']
})
export class AfficherEtablissementComponent implements OnInit {
  etablissement: Etablissement | undefined;

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.etablissement = this.etablissementService.getEtablissement(id);
  }
}
