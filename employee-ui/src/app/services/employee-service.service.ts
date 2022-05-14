import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Employee } from '../Employee';


const headers = { 'context-type' : 'application/json' }

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  private apiUrl = 'https://localhost:5000/api/Employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl + '/get').pipe(
      map(events => events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));
  }

  deleteEmployee(employee: Employee){
    const url = `${this.apiUrl}/delete/${employee.id}`;
    return this.http.delete<Employee>(url);
  }

  postEmployee(employee: Employee): Observable<Employee>{
    const url = this.apiUrl + '/post';
    return this.http.post<Employee>(url, {
      "Name": employee.name,
      "Description": employee.description
    },
    {'headers':headers});
  }
}
