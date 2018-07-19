import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from "./employee.service";
import { EmployeeListComponent } from './employee-list.component';
import { AddEmployeeComponent } from './add-employee.component';
import { EditEmployeeComponent } from './edit-employee.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path:'list',component:EmployeeListComponent},
      {path:'add',component:AddEmployeeComponent},
      { path: 'edit/:id', component: EditEmployeeComponent },
    ])
  ],
  declarations: [
    EmployeeListComponent,
   AddEmployeeComponent,
   EditEmployeeComponent],

  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }
