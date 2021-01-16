import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() tableData: any;
  constructor() { }

  ngOnChanges(){
    console.log("mayre chudi itihash");
    
    console.log(this.tableData);
  }


  ngOnInit(): void {

  }



}
