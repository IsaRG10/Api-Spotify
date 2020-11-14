import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsComponent } from 'src/app/shared/components/reactive-forms/reactive-forms.component';
import { Participante } from 'src/app/shared/models/participantes';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-detalle-participante',
  templateUrl: './detalle-participante.component.html',
  styleUrls: ['./detalle-participante.component.css']
})
export class DetalleParticipanteComponent implements OnInit {
  requestedParticipanteId: number;
  participante = new Participante();
  ShowReactiveForm = false;
  artistasFavoritos: Array<any>;
  mostrar = false;
  mostrarCanciones = false

  constructor(private activatedRouter: ActivatedRoute, private userService: UserService,
    public dialog: MatDialog, private notifications: NotificationsService, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.requestedParticipanteId = params.id;
      this.getParticipanteDetails(this.requestedParticipanteId);
    })
  }

  getParticipanteDetails = (userId) => {
    this.userService.getUserId(userId).subscribe((res: Participante) => {
      this.participante = res;
    });
  }

  setShowReactiveForm = () => {
    let dialogRef = this.dialog.open(ReactiveFormsComponent, {
      data: {...this.participante}
    });
    dialogRef.afterClosed().subscribe((event) => {
     this.editedHandlerParticipante(event.data);
     console.log(event);
    });
  }

  editedHandlerParticipante = (event) => {
    this.editar(event);
    this.notifications.userEdited();
  }

  editar = (event) => {
    this.userService.editUser(this.requestedParticipanteId, event.value).subscribe(res => {
      this.getParticipanteDetails(this.requestedParticipanteId);
    });
  }

mostrarBuscador(){
  this.mostrar = !this.mostrar;
}

mostrarBuscadorCanciones(){
  this.mostrarCanciones = !this.mostrarCanciones;
}



}