import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';
import $ from 'jquery';



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  loggedUser = '';
  currRole = '';
  courses : Observable<any[]> | undefined;
  enrollments : Observable<any[]> | undefined;
  enrollmentcount : Observable<any[]> | undefined;
  wishlist : Observable<any[]> | undefined;
  chapters : Observable<any[]> | undefined;
  
  constructor(private _service : AdminService) {}

  ngOnInit(): void 
  {

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    $("#btn").click(function(){
      $(".sidebar").toggleClass("open");
      menuBtnChange();
    });
    
    $(".bx-search").click(function(){ 
      $(".sidebar").toggleClass("open");
      menuBtnChange(); 
    });
    
    function menuBtnChange() {
     if($(".sidebar").hasClass("open")){
      $("#btn").removeClass("fa-bars").addClass("fa-ellipsis-v");
     }else {
      $("#btn").removeClass("fa-ellipsis-v").addClass("fa-bars");
     }
    }

    this.courses = this._service.getTotalCourses();
    this.enrollments = this._service.getTotalEnrollments();
    this.enrollmentcount = this._service.getTotalEnrollmentCount();
    this.wishlist = this._service.getTotalWishlist();
    this.chapters = this._service.getTotalChapters();

  }

}