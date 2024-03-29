import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfessorService } from '../services/professor.service';
import  $ from 'jquery';
import { Course } from '../course.model';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course = new Course();
  msg = ' ';

  constructor(private _professorService : ProfessorService, private _router : Router) { }

  ngOnInit(): void 
  {
    $("#websitelink, #youtubelink").css("display","none");
    $("#websitelink").hide();
    
    $("select").on('change', () => {
      $(this).find("option:selected").each(() => {
          var option = $(this).attr("value");
          if(option === "Website") {
            $("#websitelink").css("display","block");
            $("#youtubelink").css("display","none");
          } 
          else if(option === "Youtube")
          {
            $("#youtubelink").css("display","block");
            $("#websitelink").css("display","none");
          }
      });
    }).change();
  }

  addCourse()
  {
    this._professorService.addCourse(this.course).subscribe(
      (      _data: any) => {
        console.log("Course added Successfully !!!");
        this._router.navigate(['/addchapter']);
      },
      (      error: { error: any; }) => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Course with "+this.course.coursename+" already exists !!!";
      }
    )
  }

}
