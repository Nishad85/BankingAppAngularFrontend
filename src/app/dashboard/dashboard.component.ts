import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'Customer';
import { Transaction } from 'Transaction';
import { User } from 'User';
import { CustomerService } from '../customer.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// customer = new Customer() ;
customer! : Customer;

cust : Customer = new Customer();
customeridsessionstorage = sessionStorage.getItem('customerid')
constructor(private  customerViewService:CustomerService,private  router:Router) { }

ngOnInit(): void {
  this.viewCustomer();
}



viewCustomer(){
  this.customerViewService.getCustomer(this.customeridsessionstorage).subscribe(data =>{
    this.customer=data;
    this.cust=data;
   
   
  });
}
}
