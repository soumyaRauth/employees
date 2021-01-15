import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employee: any;
  constructor(private dataService: DataService) {}

  getEmployeeList() {
    this.dataService.getData().subscribe((data) => {
      console.log('Received data is');
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
}
