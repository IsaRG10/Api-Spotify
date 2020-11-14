import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  items:Array<any> = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.getNovedades();
  }

  getNovedades = () => {
    this.spotify.getNewReleases().subscribe(res => {
      this.items = res;
    })
  }

  logout(){
    sessionStorage.removeItem("session");
  }

}
