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
  data: any;
  chartLabels: String[] = [];
  chartData: number[] = [];

  constructor(private employeeService : EmployeeService){
    //get employees
    this.employeeService.getEmployees().subscribe(a => {
      this.employees = a; 
      console.log(a);
      this.getChartData();
    });    
    //set table columns
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Las Name' },
      { field: 'emailId', header: 'Email ID' },
      { field: 'employeeType', header: 'Employee Type' }
    ];

   
  }

  //create new employee or update employee
  save() {
    this.employeeService.create(this.employeee).subscribe( a => {
            if (this.newEmployee){
                console.log(a);
                this.employees.push(a);
            }
            else{
                this.employees[this.employees.indexOf(this.selectedEmployee)] = a;
            }
            this.employeee = null;

        });
    this.displayDialog = false;
  }

  //delete employee
  delete() {   
      this.employeeService.delete(this.selectedEmployee.id).subscribe(() => {
        let index = this.employees.indexOf(this.selectedEmployee);
        this.employees = this.employees.filter((val, i) => i != index);
        this.employeee = null;
      })
      this.displayDialog = false;
  }

  //show dialog to create new employee
  showDialogToAdd() {
    this.newEmployee = true;
    this.employeee = {};
    this.displayDialog = true;
  }

  //show dialog to edit/delete exsiting employee
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

  getChartData(){
    for(let i = 0; i < this.employees.length; i++){
      let type = this.employees[i].employeeType;
      if(!this.chartLabels.includes(type)){
        this.chartLabels.push(type);
        this.chartData.push(1);
      }else{
        let index = this.chartLabels.indexOf(type);
        this.chartData[index] += 1;
      }
    }

    console.log(this.employees)
    console.log(this.chartLabels)
    console.log(this.chartData)
    this.data = {
      labels: this.chartLabels,
      datasets: [
          {
              data: this.chartData,
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  '#9CCC65'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  '#9CCC65'
              ]
          }]    
      };
  }
}
