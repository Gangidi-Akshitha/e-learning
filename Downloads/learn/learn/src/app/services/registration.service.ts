import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { Professor } from '../professor.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>('your_user_registration_endpoint', user);
  }

  registerProfessorFromRemote(professor: Professor): Observable<any> {
    return this.http.post<any>('your_professor_registration_endpoint', professor);
  }
}
