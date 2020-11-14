import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
arrayArtistas:Array<any>;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscador = (artista:string) => {
    this.spotify.getArtistas(artista).subscribe(res => {
      this.arrayArtistas = res;
    });
  }

}
