import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  faInfo = faInfoCircle;

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => this.employees = employees);
  }

  onDelete(employee: Employee){

  }

  onUpdate(employee: Employee){

  }

  onEmployeeInfo(employee: Employee){
    
  }
}
