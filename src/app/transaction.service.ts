import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transaction_url = "http://localhost:8088/BankingApp/viewalltransaction";
  private user_rtgs_url = "http://localhost:8088/BankingApp/rtgs";
  private user_neft_url = "http://localhost:8088/BankingApp/neft";
  private user_imps_url = "http://localhost:8088/BankingApp/imps";

  
  constructor(private http_ser:HttpClient) { }

  fetchTransactions(cid: string | null): Observable<Transaction[]>{
    return this.http_ser.get<Transaction[]>(this.transaction_url+"/"+cid);
  }



  addTransactionNeft(user:Transaction,cid: string | null): Observable<Object>{
    return this.http_ser.post(this.user_neft_url+"/"+cid,user);
  }

  addTransactionRTGS(user:Transaction,cid: string | null): Observable<Object>{
    return this.http_ser.post(this.user_rtgs_url+"/"+cid,user);
  }

  addTransactionIMPS(user:Transaction,cid: string | null): Observable<Object>{
    return this.http_ser.post(this.user_imps_url+"/"+cid,user);
  }


}