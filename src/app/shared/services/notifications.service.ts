import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppNotifications } from '../constants/appNotifications';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) { }

  userCreated = () => {
    this.snackBar.open(AppNotifications.CREATED_USER, 'OK', { duration: 3000 });
  }

  userDeleted = () =>{
    this.snackBar.open(AppNotifications.DELETE_USER, "OK", { duration: 3000 });
  }

  userEdited = () => {
    this.snackBar.open(AppNotifications.EDITED_USER, "OK", { duration: 3000 });
  }

  artistaFavorito = () => {
    this.snackBar.open(AppNotifications.ARTISTA_FAVORITO, "OK", {duration: 3000});
  }

  cancionFavorita = () => {
    this.snackBar.open(AppNotifications.CANCION_FAVORITA, "OK", {duration: 3000});
  }

  artistaEliminado = () => {
    this.snackBar.open(AppNotifications.ARTISTA_ELIMINADO, "OK", { duration: 3000 });
  }

  cancionEliminada = () => {
    this.snackBar.open(AppNotifications.CANCION_ELIMINADA, "OK", { duration: 3000 });
  }

  artistaExistente = () => {
    this.snackBar.open(AppNotifications.ARTISTA_YA_ANADIDO, "OK", {duration: 3000});
  }

  cancionExistente = () => {
    this.snackBar.open(AppNotifications.CANCION_YA_ANADIDA, "OK", {duration: 3000});
  }
}
