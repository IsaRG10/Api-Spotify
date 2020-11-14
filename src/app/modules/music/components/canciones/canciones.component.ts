import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
  idArtista: string;
  track: Array<any> = [];
  artista: any = {};

  constructor(private spotify: SpotifyService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.idArtista = params.id;
      this.getTrack(params.id);
      this.getArtista(params.id);
    });
  }

  getArtista = (id:string) => {
    this.spotify.getArtista(id).subscribe(res => {
      this.artista = res;
    });
  }

  getTrack = (id:string) => {
    console.log("en getTrack " + id);
    this.spotify.getTopTracks(id).subscribe(res => {
      console.log(res);
      this.track = res;
    });
  }
}
