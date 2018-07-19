import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page_not_found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeData } from './Employee/employee_data';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeModule } from './Employee/employee.module';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmployeeModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',component:WelcomeComponent},
      {path:'**',component:PageNotFoundComponent}
    ]),
    InMemoryWebApiModule.forRoot(EmployeeData, { delay: 1000 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
