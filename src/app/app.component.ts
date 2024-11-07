import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyCardComponent } from "./body-card/body-card.component";
import {FormStudentComponent} from "./form-student/form-student.component";
import { Student } from './student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyCardComponent, FormStudentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tp1StudentCard';
  student: Student | null = null;
  onStudentCreated(student: Student) {
    this.student = student; 
  }
}
