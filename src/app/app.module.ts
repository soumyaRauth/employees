import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { GenericTableComponent } from './generic-table/generic-table.component';
import {FormsModule} from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GenericTableComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
