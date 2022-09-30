import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.css']
})
export class LogoutUserComponent implements OnInit {

  constructor(private authentocationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authentocationService.logOutCustomer();
    this.router.navigate(['login']);
  }
 
}
