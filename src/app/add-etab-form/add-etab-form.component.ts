import { Component,EventEmitter,Output  } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Etablissement } from '../etablissement';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-etab-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-etab-form.component.html',
  styleUrl: './add-etab-form.component.css'
})
export class AddETabFormComponent {
  etblissement = new Etablissement('','');
  @Output() etblissementCreated = new EventEmitter<Etablissement>();
  etablissementsstr: any =localStorage.getItem('etblissement');
  etablissements: Etablissement[] = JSON.parse(this.etablissementsstr) || [];// incrementation de tableau



  // Method pour ajouter dans la liste des etablissements dans uemf
  addEtablissement(newEtablissement: Etablissement) {
    this.etablissements.push(newEtablissement);
    
  }
  constructor(private router: Router) {}
 onSumbit(){
  if (this.etblissement.IdEtab && this.etblissement.EtabName) {
    this.etblissementCreated.emit(this.etblissement); // Emit the etblissement
    this.addEtablissement(this.etblissement);

    localStorage.setItem('etblissement', JSON.stringify(this.etablissements));

    this.etblissement = new Etablissement('', ''); // Reset form
    // Redirige vers AddStudentFormComponent avec la liste d'établissements
    this.router.navigate(['/AddStud'], { state: { etablissements: this.etablissements } });
  } else {
    alert('Veuillez remplir tous les champs.');
  }
}
}