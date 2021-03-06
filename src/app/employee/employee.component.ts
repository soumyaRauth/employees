import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  deleteFlag:boolean=true;
  employee: any=new Employee();
  employeeList:any=[];
  constructor(private dataService: DataService) {}

  getEmployeeList() {
    this.dataService.getData().subscribe((data) => {
      this.employeeList=data;

      console.log('Received data is');
      console.log(this.employeeList);
    });
  }


  deleteImplemented(ev:any){
    console.log("Employee Deleted");
    console.log(ev);
    this.getEmployeeList();
    this.deleteFlag=false;
    
  }


  insertData(){
    this.dataService.insertData(this.employee).subscribe(data=>{
      this.employee.name=''
      this.employee.age=''
      this.employee.salary=''
      this.getEmployeeList();

    })
  }


  ngOnInit(): void {
    this.getEmployeeList();

    
    
  }
}
