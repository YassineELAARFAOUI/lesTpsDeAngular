import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Etablissement } from '../etablissement';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-student-form',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './add-student-form.component.html',
  styleUrl: './add-student-form.component.css'
})
export class AddStudentFormComponent {
  etablissements: Etablissement[] = [];
  constructor(){
    this.etablissements = history.state.etablissements || [];
    console.log(history.state.etablissements);
  }
  student = new Student('', '', '', ''); 
   @Output() studentCreated = new EventEmitter<Student>();
   studentsstr: any =localStorage.getItem('student');
   students: Student[] = JSON.parse(this.studentsstr) || [];// incrementation de tableau
    // Method pour ajouter dans la liste des etablissements dans uemf
  addStudent(newStudent: Student) {
    this.students.push(newStudent);
    
  }
  onSubmit() {
    this.studentCreated.emit(this.student);
    this.addStudent(this.student);
    localStorage.setItem('student', JSON.stringify(this.students));
    this.student= new Student('','','','');
    console.log(this.students);
  }
}
