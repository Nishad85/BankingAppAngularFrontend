import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isAdminLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('customerid')
  }

  isCustomerLoggedIn(){
    let customer = sessionStorage.getItem('customerid')
    console.log(!(customer === null))
    return !(customer === null)
  }

  logOutCustomer() {
    sessionStorage.removeItem('customerid')
  }

}
