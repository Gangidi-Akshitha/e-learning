// admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../professor.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://example.com/api/admin'; // Replace this with your API endpoint for admin operations

  constructor(private http: HttpClient) {}

  addProfessor(professor: Professor): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/professors`, professor);
  }
  getTotalProfessors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/professors`);
  }

  getTotalUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getTotalCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/courses`);
  }

  getTotalEnrollments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/enrollments`);
  }

  getTotalEnrollmentCount(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/enrollmentcount`);
  }

  getTotalWishlist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/wishlist`);
  }

  getTotalChapters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chapters`);
  }
}
