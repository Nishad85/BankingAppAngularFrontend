import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotIdComponent } from './forgot-id/forgot-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { LogoutComponent } from './logout/logout.component';
import { NeftBankingComponent } from './neft-banking/neft-banking.component';
import { ImpsBankingComponent } from './imps-banking/imps-banking.component';
import { RtgsBankingComponent } from './rtgs-banking/rtgs-banking.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ThankyouRegisterComponent } from './thankyou-register/thankyou-register.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminApproveCustomerComponent } from './admin-approve-customer/admin-approve-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NetbankingComponent,
    DashboardComponent,
    ForgotIdComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    AccountStatementComponent,
    LogoutComponent,
    NeftBankingComponent,
    ImpsBankingComponent,
    RtgsBankingComponent,
    AddBeneficiaryComponent,
    DepositMoneyComponent,
    TransactionStatusComponent,
    ViewProfileComponent,
    IndexComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ErrorPageComponent,
    ThankyouRegisterComponent,
    LogoutUserComponent,
    AdminApproveCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
