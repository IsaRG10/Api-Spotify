import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Participante } from '../models/participantes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fakeJSONServer = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser(): Observable<Array<Participante>>{
    return this.http.get(this.fakeJSONServer + '/participantes')
    .pipe(map((res: Array<Participante>) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  getUserId(idUser:number): Observable<Participante>{
    return this.http.get(this.fakeJSONServer + `/participantes/${idUser}`)
    .pipe(map((res: Participante) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  createUser = (user: Participante) => {
    return this.http.post(this.fakeJSONServer + '/participantes', user)
    .pipe(map((res: Array<Participante>) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  editUser = (userId: number, usuarioEditado: Participante) => {
    console.log("Servicio id recibido: "+ userId, usuarioEditado);
    return this.http.put(this.fakeJSONServer + `/participantes/${userId}`, usuarioEditado)
    .pipe(map((res: Participante) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  deleteUser = (userId:number) => {
    return this.http.delete(this.fakeJSONServer + `/participantes/${userId}`)
    .pipe(map((res: Array<Participante>) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler = (error:HttpErrorResponse) => {
    return throwError(error.message || 'Server error');
  }
}
