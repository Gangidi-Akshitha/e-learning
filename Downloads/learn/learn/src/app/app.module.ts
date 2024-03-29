import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './services/registration.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginService } from './services/login.service';
import { UserGuard } from './user.guard';

@NgModule({
  declarations: [
    AppComponent,
    AddchapterComponent,
    AddcourseComponent,
    AddprofessorComponent,
    AdmindashboardComponent,
    ApprovalstatusComponent,
    CourselistComponent,
    FooterComponent,
    FullcourseComponent,
    HeaderComponent,
    LoginComponent,
    MycoursesComponent,
    MywishlistComponent,
    ProfessordashboardComponent,
    ProfessorlistComponent,
    ProfessorprofileComponent,
    RegistrationComponent,
    RegistrationsucessComponent,
    UserdashboardComponent,
    UserlistComponent,
    UserprofileComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
  CarouselModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
    
  ],
  providers: [RegistrationService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
