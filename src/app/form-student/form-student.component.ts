import { Component,EventEmitter,Output } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-form-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-student.component.html',
  styleUrl: './form-student.component.css'
})
export class FormStudentComponent {
  student = new Student('', '', '', ''); 
   @Output() studentCreated = new EventEmitter<Student>();
  onSubmit() {
    console.log(this.student); 
    this.studentCreated.emit(this.student);
  }

}
