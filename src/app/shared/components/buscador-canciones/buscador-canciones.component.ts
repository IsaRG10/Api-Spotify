import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador-canciones',
  templateUrl: './buscador-canciones.component.html',
  styleUrls: ['./buscador-canciones.component.css']
})
export class BuscadorCancionesComponent implements OnInit {
  arrayCanciones:Array<any>;
  @Input() idParticipante;
  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscador = (cancion: string) => {
    this.spotify.getTracks(cancion).subscribe(res => {
      this.arrayCanciones = res;
    });
  }

}
