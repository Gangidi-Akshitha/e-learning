import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfessorService } from '../services/professor.service';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professorprofile',
  templateUrl: './professorprofile.component.html',
  styleUrls: ['./professorprofile.component.css']
})
export class ProfessorprofileComponent implements OnInit {
 
  profileDetails: Observable<Professor[]> | undefined;
  professor: Professor = new Professor();
  msg = ' ';
  currRole = '';
  loggedUser = '';
  temp = false;

  constructor(private _service: ProfessorService, private activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void 
  {
    this.loggedUser = sessionStorage.getItem('loggedUser') || '';
    this.currRole = sessionStorage.getItem('ROLE') || ''; 
    $("#profilecard").show();
    $("#profileform").hide();
    this.getProfileDetails(this.loggedUser);
  }

  editProfile()
  {
    $("#profilecard").hide();
    $("#profileform").show();
  }

  getProfileDetails(loggedUser: string)
  {
    this.profileDetails = this._service.getProfileDetails(this.loggedUser);
  }

  updateProfessorProfile()
  {
    this._service.UpdateUserProfile(this.professor).subscribe(
      () => {
        console.log("Professor Profile Updated successfully");
        this.msg = "Profile Updated Successfully !!!";
        $(".editbtn").hide();
        $("#message").show();
        this.temp = true;
        $("#profilecard").show();
        $("#profileform").hide();
        setTimeout(() => {
          this._router.navigate(['/professordashboard']);
        }, 6000);
      },
      (error: any) => {
        console.log("Profile Updation Failed");
        console.log(error);
        this.msg = "Profile Updation Failed !!!";
      }
    )
  }
}
