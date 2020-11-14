import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participante } from 'src/app/shared/models/participantes';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-artistas-favoritos',
  templateUrl: './artistas-favoritos.component.html',
  styleUrls: ['./artistas-favoritos.component.css']
})
export class ArtistasFavoritosComponent implements OnInit {
  participante: Participante = new Participante;
  idParticipante: number;
  artistasFavoritos: any = [];
  cancionesFavoritas: any = [];
  data = {};
  dataCancion = {};

  constructor(private activatedRouter: ActivatedRoute,
              private userService: UserService,
              private spotify: SpotifyService,
              private notification: NotificationsService) { }

  ngOnInit(): void {
    this.participante.artistaFavoritos = [];
    this.activatedRouter.params.subscribe(params => {
      this.idParticipante = params.id;
      this.getParticipanteDetails(this.idParticipante);
    });
  }

  getParticipanteDetails = (userId) => {
    this.userService.getUserId(userId).subscribe((res: Participante) => {
      this.participante = res;
      this.participante.artistaFavoritos = res.artistaFavoritos;
      this.participante.cancionesFavoritas = res.cancionesFavoritas;
      this.participante.artistaFavoritos.forEach(element => {
        this.spotify.getArtista(element).subscribe(res => {
          this.data = res;
          this.artistasFavoritos.push(this.data);
        });
      });
      this.participante.cancionesFavoritas.forEach(element => {
        this.spotify.getCancion(element).subscribe(res => {
          this.dataCancion = res;
          this.cancionesFavoritas.push(this.dataCancion);
        });
      });
    });
  }

  eliminarArtistaFavorito = (id) => {
    this.artistasFavoritos.splice(id, 1);
    this.participante.artistaFavoritos = [];
    for (let index = 0; index < this.artistasFavoritos.length; index++) {
      this.participante.artistaFavoritos.push(this.artistasFavoritos[index].id);
    }
    this.userService.editUser(this.idParticipante, this.participante).subscribe(res => {
      this.notification.artistaEliminado();
    });
  }

  eliminarCancionFavorita = (id) => {
    this.cancionesFavoritas.splice(id, 1);
    this.participante.cancionesFavoritas = [];
    for (let index = 0; index < this.cancionesFavoritas.length; index++) {
      this.participante.cancionesFavoritas.push(this.cancionesFavoritas[index].id);
    }
    this.userService.editUser(this.idParticipante, this.participante).subscribe(res => {
      this.notification.cancionEliminada();
    });
  }
}