import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any;
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/employee');
  }


  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/addemployee',data)
  }
  
  
  updateData(id:any,data:any){
    return this.httpClient.patch('http://127.0.0.1:8000/updateemployee/'+id,data)
  }

  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/deleteemployee/'+id)
  }

  getEmployeeById(id:any){
    
    return this.httpClient.get('http://127.0.0.1:8000/employeebyid/'+id);
  }
}
