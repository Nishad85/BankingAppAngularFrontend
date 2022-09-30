import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'Customer';
import { Observable } from 'rxjs';
import { User } from 'User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private create_cust_url="http://localhost:8088/BankingApp/createcustomer";
  private view_users="http://localhost:8088/BankingApp/admindashboard";
  private view_pending_users ="http://localhost:8088/BankingApp/admindashboard/pending";
  private change_net_bank_url="http://localhost:8088/BankingApp/changenetbanking";
  private decline_user_url="http://localhost:8088/BankingApp/deleteuser";
  private view_customers="http://localhost:8088/BankingApp/getcustomerlist"
  constructor(private http_ser:HttpClient) { }
  getCustomerList(): Observable<Customer[]>{
    return this.http_ser.get<Customer[]>(this.view_customers);   
  }
  createCustomer(user:User, userid:number): Observable<Object>{
    return this.http_ser.post(this.create_cust_url+'/'+userid,user);
  }

  getUserList(): Observable<User[]>{
    return this.http_ser.get<User[]>(this.view_users);   
  }

  getPendingUserList():Observable<User[]>{
    return this.http_ser.get<User[]>(this.view_pending_users);
  }
  
  setNetBank(customer:Customer, customerid:number) :Observable<Object>{
    alert(customerid)
    return this.http_ser.post(this.change_net_bank_url+"/"+customerid,Customer);
  }


  removeUser(user:User, userid:number): Observable<Object>{
    alert(userid)
    return this.http_ser.post(this.decline_user_url+'/'+userid,User);
  }
}