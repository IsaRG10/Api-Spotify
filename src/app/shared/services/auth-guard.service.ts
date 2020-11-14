import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Participante } from '../models/participantes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  participante: Participante;
  constructor(private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.participante = JSON.parse(sessionStorage.getItem('session'));

    if(this.participante === null){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
