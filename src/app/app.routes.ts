import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddETabFormComponent } from './add-etab-form/add-etab-form.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { StudentCardComponent } from './student-card/student-card.component';

export const routes: Routes = [  
    {path:'',component: HomePageComponent},
    {path:'homePage',component: HomePageComponent},
    {path:'addEtab',component: AddETabFormComponent},
    {path:'AddStud',component:AddStudentFormComponent},
    {path:'studentsCard',component: StudentCardComponent},
];
