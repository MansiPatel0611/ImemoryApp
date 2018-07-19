import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 public employees:Employee[];
  errorMessage: any;
  constructor( private router: Router,private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe((employees:Employee[]) =>  
        this.employees = employees);
  }
  deleteEmp(data) {
    //console.log(this.employees);
    //console.log(data);
    if (confirm(`Really delete the employee:?`)) {
      var deleteIndex;
      for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id === data.id) {
          deleteIndex = i;
          break;
        }
      }
    }
    //console.log(deleteIndex);
    this.employeeservice.remove(data).subscribe(
      result => this.employees.splice(deleteIndex, 1)
    );

    this.router.navigate(['/list']);
  }
}
