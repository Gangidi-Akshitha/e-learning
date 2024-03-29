import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationsuccess',
  templateUrl: './registrationsucess.component.html',
  styleUrls: ['./registrationsucess.component.css']
})
export class RegistrationsucessComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void 
  {
    setTimeout(() => {
      this.router.navigate(['login']);
  }, 7000);
  }

}