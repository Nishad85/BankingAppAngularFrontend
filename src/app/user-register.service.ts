import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'Customer';
import { Observable } from 'rxjs';
import { User } from 'User';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private user_register_url = "http://localhost:8088/BankingApp/register";
  private user_login_url = "http://localhost:8088/BankingApp/customerlogin";
  constructor(private http_ser:HttpClient) { }

  createUser(user:User): Observable<Object>{
    return this.http_ser.post(this.user_register_url,user);
  }

  validateUser(cs : Customer): Observable<Object> {
      return this.http_ser.get(this.user_login_url + '/'+ cs.customerid);
      
    }
  
}
