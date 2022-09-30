import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http_ser:HttpClient) { 

  }
  private view_detail_url = "http://localhost:8088/BankingApp/viewdetails";

  getCustomer(cid: string | null):Observable<Customer>{
    return this.http_ser.get<Customer>(this.view_detail_url+"/"+cid);
  }
}
