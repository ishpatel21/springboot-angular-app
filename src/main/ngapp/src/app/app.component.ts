import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  employees : Employee[] = [];
  selectedEmployee : Employee;
  newEmployee : boolean;
  employeee : Employee = {};
  displayDialog : boolean = false;
  cols: any[];

  constructor(private appService : AppService){
    this.appService.getEmployees().subscribe(a => {this.employees = a; console.log(a)});

    this.appService.getOne(1).subscribe(a => console.log(a));
    
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Las Name' },
      { field: 'emailId', header: 'Email ID' }
  ];
    // this.employee.firstName = "John";
    // this.employee.lastName = "Doe";
    // this.appService.create(this.employee).subscribe(a => console.log(a));
  }

  save() {
    let employees = [...this.employees];
    if (this.newEmployee)
    employees.push(this.employeee);
    else
    employees[this.employees.indexOf(this.selectedEmployee)] = this.employeee;

    this.employees = employees;
    this.employeee = null;
    this.displayDialog = false;
  }

  delete() {
      let index = this.employees.indexOf(this.selectedEmployee);
      this.employees = this.employees.filter((val, i) => i != index);
      this.employeee = null;
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
