import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './data/Employee';

@Component({
  selector: 'employeeCrud',
  templateUrl: './employee.component.html',
  styleUrls: []
})
export class EmployeeComponent {
  title = 'app';

  employees : Employee[] = [];
  selectedEmployee : Employee;
  newEmployee : boolean;
  employeee : Employee = {};
  displayDialog : boolean = false;
  cols: any[];

  constructor(private employeeService : EmployeeService){
    this.employeeService.getEmployees().subscribe(a => {this.employees = a; console.log(a)});    
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Las Name' },
      { field: 'emailId', header: 'Email ID' }
    ];
  }

  save() {
    this.employeeService.create(this.employeee).subscribe( a => {
            if (this.newEmployee){
                this.employees.push(this.employeee);
            }
            else{
                this.employees[this.employees.indexOf(this.selectedEmployee)] = this.employeee;
            }
            this.employeee = null;

        });
    this.displayDialog = false;
  }

  delete() {   
      this.employeeService.delete(this.selectedEmployee.id).subscribe(() => {
        let index = this.employees.indexOf(this.selectedEmployee);
        this.employees = this.employees.filter((val, i) => i != index);
        this.employeee = null;
      })
      this.displayDialog = false;
  }

  showDialogToAdd() {
    this.newEmployee = true;
    this.employeee = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newEmployee = false;
    this.employeee = this.clone(event.data);
    this.displayDialog = true;
  }

  clone (c: Employee): Employee {
      let car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }
}
