import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '../../../node_modules/@angular/router';
import { Employee, Emp } from './employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public qualification: Array<string>;

  constructor(private employeeservice: EmployeeService, private router: Router){ }
 public data=new Emp();
  @Input() employees: Array<Employee>;

  ngOnInit() {
    this.qualification = ['Developer', 'Web Designer', 'Consultant', 'Manager', 'Other'];
  }
  onSubmit() {
    this.employeeservice.newEmployee(this.data).
      subscribe((employees) =>  this.employees.push(employees));
    //subscribe();
    //employees => this.employees.push(this._data));
    this.router.navigate(['/list']);
  }
  on_cancel() {
    this.router.navigate(['/list']);
  }

}
