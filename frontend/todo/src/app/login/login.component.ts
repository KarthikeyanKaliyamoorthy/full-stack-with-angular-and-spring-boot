import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'karthik';
  password = '';
  errorMsg = 'Invalid credentials';
  isInValidLogin = false;

  //Angular injects dependency through constructor
  //Dependecy injection to inject router
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.isInValidLogin = false;
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.isInValidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.isInValidLogin = false;
        //redirect to welcome page
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        this.isInValidLogin = true;
      }
    )
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.isInValidLogin = false;
        //redirect to welcome page
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        this.isInValidLogin = true;
      }
    )
  }

}
