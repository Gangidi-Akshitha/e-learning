import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { User } from '../user.model';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  professor = new Professor();
  msg = "";
  adminEmail = "";
  adminPassword = "";

  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit(): void {
    // Your initialization code here
  }

  loginUser() {
    // Ensure loginUserFromRemote in LoginService returns an Observable
    this._service.loginUserFromRemote(this.user).subscribe(
      (data: any) => {
        console.log(data);
        console.log("Response Received");
        sessionStorage.setItem('loggedUser', this.user.email);
        sessionStorage.setItem('USER', "user");
        sessionStorage.setItem('ROLE', "user");
        sessionStorage.setItem('name', this.user.email);
        sessionStorage.setItem('gender', "male");
        this._router.navigate(['/userdashboard']);
      },
      (error: any) => {
        console.log(error);
        this.msg = "Bad credentials, please enter valid credentials !!!";
      }
    )
  }

  loginProfessor() {
    // Ensure loginProfessorFromRemote in LoginService returns an Observable
    this._service.loginProfessorFromRemote(this.professor).subscribe(
      (data: any) => {
        console.log(data);
        console.log("Response Received");
        sessionStorage.clear();
        sessionStorage.setItem('loggedUser', this.professor.email);
        sessionStorage.setItem('USER', "professor");
        sessionStorage.setItem('ROLE', "professor");
        sessionStorage.setItem('professorname', this.professor.email);
        sessionStorage.setItem('gender', "male");
        this._router.navigate(['/professordashboard']);
      },
      (error: any) => {
        console.log(error);
        this.msg = "Bad credentials, please enter valid credentials !!!";
      }
    )
  }

  adminLogin() {
    // Ensure adminLoginFromRemote in LoginService returns an Observable
    if (this._service.adminLoginFromRemote(this.adminEmail, this.adminPassword)) {
      sessionStorage.setItem('loggedUser', this.adminEmail);
      sessionStorage.setItem('USER', "admin");
      sessionStorage.setItem('ROLE', "admin");
      sessionStorage.setItem('name', "admin");
      sessionStorage.setItem('gender', "male");
      this._router.navigate(['/admindashboard']);
    }
    else {
      console.log("Exception Occurred");
      this.msg = 'Bad admin credentials !!!'
    }
  }
}
