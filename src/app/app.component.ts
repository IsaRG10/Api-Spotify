import { Component } from '@angular/core';
import { Participante } from './shared/models/participantes';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-final-isabel-rodriguez';
  user: Participante
  isAuthenticated: boolean;
  
  constructor(private auth: NavbarService) {
  }

  ngOnInit() {
    this.auth.getIsAuthenticated().subscribe(isAuth => {
      console.log(isAuth);
      this.isAuthenticated = isAuth;
    });
  }
}
