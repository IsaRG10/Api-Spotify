import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  user: any;
  authenticated: BehaviorSubject<boolean>

  constructor(private router: Router, private http: HttpClient) {
   this.authenticated = new BehaviorSubject(false);
   }

  login(username, password): Observable<any> {
    const payload = {
      user: username,
      pass: password
    }
    this.user = payload;
    sessionStorage.setItem('session', JSON.stringify(this.user));
    this.authenticated.next(true);
    return this.user;
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  logout() {
    // remove user from local storage and set current user to null
    sessionStorage.removeItem('session');
    this.router.navigate(['/login/']);
  }
  
}
