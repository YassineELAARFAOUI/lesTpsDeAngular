import { Component } from '@angular/core';
import { EtablissementComponent } from "../etablissement/etablissement.component";

@Component({
  selector: 'app-body-card',
  standalone: true,
  imports: [EtablissementComponent],
  templateUrl: './body-card.component.html',
  styleUrl: './body-card.component.css'
})
export class BodyCardComponent {

}
