import { Customer } from "Customer";

export class Beneficiary{
    beneficiaryid!:number;
    ben_name!:string;
    ben_accno!:number;
    nickname!:string;
    customer : Customer;
}