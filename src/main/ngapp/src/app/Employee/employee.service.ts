import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './data/Employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
 
  constructor(private http: HttpClient) { }
 
  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/emp');
  }

  getOne(id:number) : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/emp/' + id);

  }

  create(employee : Employee) : Observable<Employee>{
    // let body = JSON.stringify(employee);
    return this.http.post<Employee>('http://localhost:8080/emp', employee, httpOptions);
  }

  delete(id : Number){
    return this.http.delete('http://localhost:8080/emp/' + id);
  }
}