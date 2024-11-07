import { Component,Input  } from '@angular/core';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-etablissement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement.component.html',
  styleUrl: './etablissement.component.css'
})
export class EtablissementComponent {

  @Input() student: Student | null = null;
}
