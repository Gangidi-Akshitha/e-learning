import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import { Enrollment } from '../enrollment.model';
import { Wishlist } from '../wishlist.model';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getProfileDetails(loggedUser: string): Observable<User[]> {
    // Your logic to fetch user profile details from the server
    // Example:
    // return this.http.get<User[]>(`/api/profile/${loggedUser}`);
    return new Observable<User[]>(); // Placeholder, replace with actual HTTP call
  }

  UpdateUserProfile(user: User): Observable<any> {
    // Your logic to update user profile
    // Example:
    // return this.http.put(`/api/profile/${user.id}`, user);
    return new Observable<any>(); // Placeholder, replace with actual HTTP call
  }
  getAllUsers(): Observable<import("../user.model").User[]> | undefined {
    throw new Error('Method not implemented.');
  }
  getWishlistByEmail(loggedUser: string): Observable<Wishlist[]> | undefined {
    throw new Error('Method not implemented.');
  }
  getAllWishlist(): Observable<Wishlist[]> | undefined {
    throw new Error('Method not implemented.');
  }
  getEnrollmentByEmail(loggedUser: string, currRole: string): Observable<Enrollment[]> | undefined {
    throw new Error('Method not implemented.');
  }
  getChappterListByCourseName(courseName: string): Observable<import("../chapter.model").Chapter[]> | undefined {
    throw new Error('Method not implemented.');
  }
 
  constructor(private http: HttpClient) {}

  getYoutubeCourseList(): Observable<Course[]> {
    // Implement the logic to fetch the list of YouTube courses
    return this.http.get<Course[]>('/api/youtube-courses');
  }

  getWebsiteCourseList(): Observable<Course[]> {
    // Implement the logic to fetch the list of website courses
    return this.http.get<Course[]>('/api/website-courses');
  }

  getCourseListByName(coursename: string): Observable<Course[]> {
    // Implement the logic to fetch course details by name
    return this.http.get<Course[]>(`/api/course-details?name=${coursename}`);
  }

  getEnrollmentStatus(coursename: string, loggedUser: string, currRole: string): Observable<any[]> {
    // Implement the logic to fetch enrollment status
    return this.http.get<any[]>(`/api/enrollment-status?course=${coursename}&user=${loggedUser}&role=${currRole}`);
  }

  getWishlistStatus(coursename: string, loggedUser: string): Observable<any[]> {
    // Implement the logic to fetch wishlist status
    return this.http.get<any[]>(`/api/wishlist-status?course=${coursename}&user=${loggedUser}`);
  }

  addToWishlist(wishlist: Wishlist): Observable<any> {
    // Implement the logic to add course to wishlist
    return this.http.post<any>('/api/add-to-wishlist', wishlist);
  }
  enrollNewCourse(enrollment: Enrollment, loggedUser: string, currRole: string): Observable<any> {
    return this.http.post<any>('https://example.com/api/enroll', { enrollment, loggedUser, currRole });
  }
}
