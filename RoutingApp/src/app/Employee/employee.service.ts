import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeeService {
    private baseUrl = 'api/employees';
   constructor(private http: Http)
   {
   }
  getEmployees(){
    return this.http.get(this.baseUrl)
    .pipe(map((res: Response) => res.json()))
 }
 getEmployee(id: string) {
    return this.http.get(this.baseUrl + '/' + id)
    .pipe(map((res: Response) => res.json()))
  }
  update(employee: Employee) {
    return this.http.put(this.baseUrl + '/' + employee.id, employee)
    .pipe(map((res: Response) => res.json()))
  }
 newEmployee(employee: Employee): Observable<Employee> {
    employee.id = undefined;
    return this.http.post(this.baseUrl, employee)
    .pipe(map((res: Response) => res.json()))
}
remove(employee: Employee) {
  return this.http.delete(this.baseUrl + '/' + employee.id)
  .pipe(map((res: Response) => res.json()))
}
}
