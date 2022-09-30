import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'Customer';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-approve-customer',
  templateUrl: './admin-approve-customer.component.html',
  styleUrls: ['./admin-approve-customer.component.css']
})
export class AdminApproveCustomerComponent implements OnInit {
  customers:Customer[] 
  customer :Customer=new Customer()
  constructor( private adminservice: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getUserList()
  }
  private getUserList(){
    this.adminservice.getCustomerList().subscribe(data=>{this.customers=data;})
  }

  enableNet(customerid:number){
    this.adminservice.setNetBank(this.customer,customerid).subscribe(
      data=>{
        alert("Netbanking enabled");
      }
    );

  }
}
