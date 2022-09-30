import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { Transaction } from 'Transaction';
import { TransactionService } from '../transaction.service';
@Component({
  selector: 'app-neft-banking',
  templateUrl: './neft-banking.component.html',
  styleUrls: ['./neft-banking.component.css']
})
export class NeftBankingComponent implements OnInit {
 neft:Transaction=new Transaction();
 route:any;
 customeridsessionstorage = sessionStorage.getItem('customerid')
  constructor(private TransactionService: TransactionService, private router :Router) { }

  ngOnInit(): void {
  }
  neftContinue(){
    this.neft.status=true;
    this.neft.trans_type="NEFT"
    this.TransactionService.addTransactionIMPS(this.neft,this.customeridsessionstorage).subscribe(data=>{
    this.router.navigate(['transaction-status']);
   
  })
  
}
}