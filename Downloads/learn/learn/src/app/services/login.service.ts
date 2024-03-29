import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { Professor } from '../professor.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;
  userType: any;
  
  constructor(private http: HttpClient) { }

  loginUserFromRemote(user: User): Observable<any> {
    // Make HTTP request and return observable
    return this.http.post<any>('your_login_endpoint', user);
  }

  loginProfessorFromRemote(professor: Professor): Observable<any> {
    // Make HTTP request and return observable
    return this.http.post<any>('your_professor_login_endpoint', professor);
  }

  adminLoginFromRemote(email: string, password: string): Observable<any> {
    // Make HTTP request and return observable
    return this.http.post<any>('your_admin_login_endpoint', { email, password });
  }
   // Method to set user login status
   setUserLoggedIn(status: boolean) {
    this.loggedIn = status;
  }
  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }
  // Method to check if user is logged in
  
}
