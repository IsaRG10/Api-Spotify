import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserAuth } from '../models/UserAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fakeJSONServer = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUser(): Observable<Array<UserAuth>>{
    return this.http.get(this.fakeJSONServer + '/userAuth')
    .pipe(map((res: Array<UserAuth>)=> res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler = (error:HttpErrorResponse) =>{
    return throwError(error.message || 'Server error');
  }
}
