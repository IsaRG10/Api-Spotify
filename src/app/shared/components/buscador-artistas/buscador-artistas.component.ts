import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador-artistas',
  templateUrl: './buscador-artistas.component.html',
  styleUrls: ['./buscador-artistas.component.css']
})
export class BuscadorArtistasComponent implements OnInit {
  arrayArtistas:Array<any>;
  @Input() idParticipante;

  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscador = (artista: string) => {
    this.spotify.getArtistas(artista).subscribe(res => {
      this.arrayArtistas = res;
    });
  }

}
