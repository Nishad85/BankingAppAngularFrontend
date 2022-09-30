import { Component, OnInit } from '@angular/core';
import { Transaction } from 'Transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  customeridsessionstorage = sessionStorage.getItem('customerid')
  transaction: Transaction = new Transaction();
  trans : Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.fetchTransactions(this.customeridsessionstorage).subscribe(
      //console.log("Subsribed");
       data=>{
          this.trans=data;
          
       }
    )
      }
}