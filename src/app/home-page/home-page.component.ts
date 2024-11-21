import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etablissement } from '../etablissement';
import { Student } from '../student';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
   //ici recuperation de liste des etablissemts pour faire le teste
   etablissements: Etablissement[] = [];
   students: Student[] = [];
  
  constructor(private router: Router) {
    const etablissementsStr = localStorage.getItem('etblissement');
    this.etablissements = etablissementsStr ? JSON.parse(etablissementsStr) : [];
    //for liste of students 
    const studentsstr =localStorage.getItem('student');
    this.students = studentsstr ? JSON.parse(studentsstr) : [];// incrementation de tableau
  }
  //ca apres en click sur le button de creation des etablissements
  navigateToAbout() {
    this.router.navigate(['/addEtab']);
  }
  // Navigate to add a student
  addStudent() {
    if (this.etablissements.length === 0) {
      alert('You must first add an Etablissement.');
    } else {
      this.router.navigate(['/AddStud'], { state: { etablissements: this.etablissements } });
    }
  }
  //click to view students list
  generateStudentsCard(){
    this.router.navigate(['/studentsCard'], { state: { students: this.students } });
  }

}
