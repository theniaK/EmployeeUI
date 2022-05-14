import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onSaveEmployee = new EventEmitter

  name: string = "";
  description: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Please add a name!");
    }

    if(!this.description){
      alert("Please add a description!");
    }

    const newEmployee ={
      id: "",
      name: this.name,
      description: this.description,
      date: "",
    }

    this.onSaveEmployee.emit(newEmployee);

    this.name ="";
    this.description = "";
  }
}
