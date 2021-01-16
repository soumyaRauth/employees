import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employeeId: any;
  employee=new Employee();
  data:any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  getEmployeeUpdateData() {
    this.dataService.getEmployeeById(this.employeeId).subscribe(data=>{
      console.log("Single Employee Imformation");
      console.log(data);
      this.data=data;
      this.employee=this.data;
      
    })
  }

  updateData(){
    console.log("hello");
    
  }

  ngOnInit(): void {
    console.log('this.route.snapshot.params.id');
    this.employeeId = this.route.snapshot.params.id;
    this.getEmployeeUpdateData();
  }
}
