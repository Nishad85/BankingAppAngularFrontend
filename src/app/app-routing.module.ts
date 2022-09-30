import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {Router} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { ForgotIdComponent } from './forgot-id/forgot-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ImpsBankingComponent } from './imps-banking/imps-banking.component';
import { LogoutComponent } from './logout/logout.component';
import { NeftBankingComponent } from './neft-banking/neft-banking.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { RtgsBankingComponent } from './rtgs-banking/rtgs-banking.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { IndexComponent } from './index/index.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ThankyouRegisterComponent } from './thankyou-register/thankyou-register.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardCustomerService } from './auth-guard-customer.service';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { AdminApproveCustomerComponent } from './admin-approve-customer/admin-approve-customer.component';



const routes: Routes = [
  
  {path : '',redirectTo:"/index", pathMatch: 'full'},
  {path:'index', component:IndexComponent},
  {path : 'login', component:LoginComponent},
  {path:'create-user', component:RegisterComponent},
  {path:'account-statement', component:AccountStatementComponent,canActivate:[AuthGuardCustomerService] },
  {path:'admin-register', component:AdminRegisterComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'add-beneficiary', component:AddBeneficiaryComponent,canActivate:[AuthGuardCustomerService] },
  {path:'admin-dashboard', component:AdminDashboardComponent,canActivate:[AuthGuardService]},
  {path : 'change-password', component:ChangePasswordComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuardCustomerService] },
  {path:'deposit-money', component:DepositMoneyComponent,canActivate:[AuthGuardCustomerService] },
  {path:'forgot-id', component:ForgotIdComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path :'imps-banking', component:ImpsBankingComponent,canActivate:[AuthGuardCustomerService] },
  {path:'logout', component:LogoutComponent},
  {path:'neft-banking', component:NeftBankingComponent,canActivate:[AuthGuardCustomerService] },
  {path:'netbanking', component:NetbankingComponent},
  {path:'rtgs-banking', component:RtgsBankingComponent,canActivate:[AuthGuardCustomerService] },
  {path:'transaction-status', component:TransactionStatusComponent,canActivate:[AuthGuardCustomerService] },
  {path:'view-profile', component:ViewProfileComponent,canActivate:[AuthGuardCustomerService] },
  {path:'thank-you-register', component:ThankyouRegisterComponent},
  {path: 'logout', component: LogoutComponent },
  {path : 'logout-user', component:LogoutUserComponent},
  {path : 'admin-approve', component:AdminApproveCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
