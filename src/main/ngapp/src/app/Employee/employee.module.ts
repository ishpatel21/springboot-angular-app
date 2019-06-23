import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//primeng
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class EmployeeModule { }
