import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngapp';

  employees : Employee[] = [];
  employee : Employee = new Employee();

  constructor(private appService : AppService){
    this.appService.getEmployees().subscribe(a => {this.employees = a; console.log(a)});

    this.appService.getOne(1).subscribe(a => console.log(a));
    
    this.employee.firstName = "John";
    this.employee.lastName = "Doe";
    this.appService.create(this.employee).subscribe(a => console.log(a));
  }

}
