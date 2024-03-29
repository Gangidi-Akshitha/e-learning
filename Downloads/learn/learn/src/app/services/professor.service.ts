import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../chapter.model';
import { Course } from '../course.model';
import { Professor } from '../professor.model';
import { Enrollment } from '../enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  getProfileDetails(loggedUser: string): Observable<Professor[]> {
    // Make an HTTP request to fetch professor profile details
    // For example:
    // return this.http.get<Professor[]>(`/api/professor/${loggedUser}`);
    return new Observable<Professor[]>(); // Placeholder, replace with actual HTTP call
  }

  UpdateUserProfile(professor: Professor): Observable<any> {
    // Logic to update professor profile
    // For example:
    // return this.http.put(`/api/professor/${professor.id}`, professor);
    return new Observable<any>(); // Placeholder, replace with actual HTTP call
  }
  getProfessorList(): Observable<Professor[]> | undefined {
    throw new Error('Method not implemented.');
  }
  getProfessorListByEmail(loggedUser: string): Observable<Professor[]> | undefined {
    throw new Error('Method not implemented.');
  }
  acceptRequestForProfessorApproval(curremail: string): Observable<any> | undefined {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://example.com/api'; // Replace this with your API endpoint

  constructor(private http: HttpClient) {}

  getCourseListNames(): Observable<any> {
    // Implement logic to fetch course list names from the API
    return this.http.get<any>(`${this.apiUrl}/courses`);
  }

  addNewChapters(chapter: Chapter): Observable<any> {
    // Implement logic to add new chapters using HTTP POST request
    return this.http.post<any>(`${this.apiUrl}/chapters`, chapter);
  }
  addCourse(course: Course): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }
  addProfessor(professor: Professor): Observable<any> {
    return this.http.post<any>(this.apiUrl, professor);
    
  }
  enrollNewCourse(enrollment: Enrollment, loggedUser: string, currRole: string): Observable<any> {
    // Implement the logic to enroll a new course
    return this.http.post<any>('/api/enroll', { enrollment, loggedUser, currRole });
  }
}
