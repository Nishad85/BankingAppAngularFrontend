import { Customer } from "Customer";

export class Transaction{
    trans_id! :Number;
    trans_type! :string;
    trans_amount! :Number;
    from_accno! : Number;
    to_accno !: Number;
    remarks !:string;
    status! :boolean;
    t_date! :Date;
    t_info! :string;
 customer : Customer;
}