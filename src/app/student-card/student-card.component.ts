import { Component } from '@angular/core';
import { Student } from '../student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  studentsstr: any =localStorage.getItem('student');
  students: Student[] = JSON.parse(this.studentsstr) || [];

}
