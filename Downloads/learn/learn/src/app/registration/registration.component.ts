import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProfessorService } from '../services/professor.service';
import { RegistrationService } from '../services/registration.service';
import { Professor } from '../professor.model';
import { User } from '../user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  professor = new Professor();
  msg = ' ';

  constructor(private _registrationservice : RegistrationService, private _professorService : ProfessorService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".nav1").addClass("highlight1")
    $("#home-tab").click(function(){
      $("#profile").hide();
      $("#home").show();
      $(".nav1").addClass("highlight1")
      $(".nav2").removeClass("highlight2")
    });
    $("#profile-tab").click(function(){
      $("#home").hide();
      $("#profile").show();
      $(".nav2").addClass("highlight2")
      $(".nav1").removeClass("highlight1")
    });
  }

  registerUser()
  {
    this._registrationservice.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("gender",this.user.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "User with "+this.user.email+" already exists !!!";
      }
    )
  }

  registerProfessor()
  {
    this._registrationservice.registerProfessorFromRemote(this.professor).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("doctorname",this.professor.professorname);
        sessionStorage.setItem("gender",this.professor.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "Professor with "+this.professor.email+" already exists !!!";
      }
    )
  }

}