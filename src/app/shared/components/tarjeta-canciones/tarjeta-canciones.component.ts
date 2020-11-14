import { Component, Input, OnInit } from '@angular/core';
import { Participante } from '../../models/participantes';
import { NotificationsService } from '../../services/notifications.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tarjeta-canciones',
  templateUrl: './tarjeta-canciones.component.html',
  styleUrls: ['./tarjeta-canciones.component.css']
})
export class TarjetaCancionesComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() idParticipante: number;
  participante = new Participante();

  constructor(private participanteService: UserService, private notification: NotificationsService) { }

  ngOnInit(): void {
    this.participanteService.getUserId(this.idParticipante).subscribe((res => {
      this.participante = res;
      console.log(this.participante);
    }));
  }

  editUser = (user: Participante) => {
    console.log(user.id);
    this.participanteService.editUser(user.id, user).subscribe(res => {
    })
  }

  anadirFavorito(idCancion: string) {
  let existe = false;
  for (let index = 0; index < this.participante.cancionesFavoritas.length; index++) {
    if (idCancion == this.participante.cancionesFavoritas[index]) {
      existe = true;
      this.notification.cancionExistente();
    }
  }
  if(existe == false){
    this.participante.cancionesFavoritas.push(idCancion);
    this.participanteService.editUser(this.idParticipante, this.participante).subscribe(res => {
      console.log("hecho");
    });
    this.notification.cancionFavorita();
  }
}
}