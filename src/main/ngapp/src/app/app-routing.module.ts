import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeModule } from './Employee/employee.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contacts'},
	{path: 'employee' , component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, EmployeeModule]
})
export class AppRoutingModule { }
