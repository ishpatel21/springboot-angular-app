import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './Employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
 
  constructor(private http: HttpClient) { }
 
  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/emp/employees');
  }

  getOne(id:number) : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/emp/employees/' + id);

  }

  create(employee : Employee){
    // let body = JSON.stringify(employee);
    return this.http.post<Employee>('http://localhost:8080/emp/employees', employee, httpOptions);
    }
}