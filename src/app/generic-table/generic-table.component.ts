import { Component, OnInit,Input, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() tableData: any;
  @Output() empDeleted : EventEmitter<any> = new EventEmitter();
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef) { }


  getEmpData(){
    this.dataService.getData().subscribe(data=>{
      console.log(data);
      
    },err=>{
      console.log(err);
      
    })
  }

  deleteEmployee(eid:any){
    console.log("ID is"+ eid);
    this.dataService.deleteData(eid).subscribe(data=>{
      console.log(data);
      let deleteStatus=1;
      this.empDeleted.emit(deleteStatus);
      // this.getEmpData();
    },err=>{
      console.log(err);
      
    })
  }


  ngOnChanges(changes:SimpleChanges){
    console.log("mayre chudi itihash");
    // this.tableData=console.log(changes['myInput'].currentValue);
    console.log(this.tableData);
  }


  ngOnInit(): void {

  }



}
