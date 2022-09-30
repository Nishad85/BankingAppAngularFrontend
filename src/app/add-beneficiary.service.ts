import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficiary } from 'Beneficiary';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddBeneficiaryService {
  private add_beneficiary_url = "http://localhost:8088/BankingApp/createbeneficiary";
  constructor(private http_ser:HttpClient) { }

  createBeneficiary(beneficiary:Beneficiary,cid: string | null) : Observable<object>{
    
    return this.http_ser.post(this.add_beneficiary_url+"/"+cid,beneficiary)
  }
}