import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchapterComponent } from './addchapter/addchapter.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApprovalstatusComponent } from './approvalstatus/approvalstatus.component';
import { CourselistComponent } from './courselist/courselist.component';
import { FooterComponent } from './footer/footer.component';
import { FullcourseComponent } from './fullcourse/fullcourse.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { ProfessordashboardComponent } from './professordashboard/professordashboard.component';
import { ProfessorlistComponent } from './professorlist/professorlist.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsucessComponent } from './registrationsucess/registrationsucess.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { RouterGuard } from './router.guard';
import { ProfessorGuard } from './professor.guard';


const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registrationsuccess',component:RegistrationsucessComponent},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AdminGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[UserGuard]},
  {path:'professordashboard',component:ProfessordashboardComponent,canActivate:[ProfessorGuard]},
  {path:'addProfessor',component:AddprofessorComponent,canActivate:[AdminGuard]},
  {path:'addCourse',component:AddcourseComponent,canActivate:[RouterGuard]},
  {path:'approveprofessor',component:ApprovalstatusComponent,canActivate:[RouterGuard]},
  {path:'professorlist',component:ProfessorlistComponent,canActivate:[RouterGuard]},
  {path:'userlist',component:UserlistComponent,canActivate:[RouterGuard]},
  {path:'courselist',component:CourselistComponent,canActivate:[RouterGuard]},
  {path:'addchapter',component:AddchapterComponent,canActivate:[RouterGuard]},
  {path:'fullcourse/:coursename',component:FullcourseComponent,canActivate:[RouterGuard]},
  {path:'editprofessorprofile',component:ProfessorprofileComponent,canActivate:[ProfessorGuard]},
  {path:'edituserprofile',component:UserprofileComponent,canActivate:[UserGuard]},
  {path:'mywishlist',component:MywishlistComponent,canActivate:[RouterGuard]},
  {path:'mycourses',component:MycoursesComponent,canActivate:[RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }