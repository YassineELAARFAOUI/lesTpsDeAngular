import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component'
import { AddETabFormComponent } from "./add-etab-form/add-etab-form.component";
import { Etablissement } from './etablissement';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AddETabFormComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tp3UemfSpace';
  etablissements: Etablissement[] = [];

  constructor(private router: Router) {}

  // Add a new etablissement to the array
  addEtablissement(newEtablissement: Etablissement) {
    this.etablissements.push(newEtablissement);
  }
}
