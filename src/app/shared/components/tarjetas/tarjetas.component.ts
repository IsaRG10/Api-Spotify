import { Component, Input, OnInit } from '@angular/core';
import { Participante } from '../../models/participantes';
import { NotificationsService } from '../../services/notifications.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
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
    this.participanteService.editUser(user.id, user).subscribe(res =>{
    })
  }

  anadirFavorito(idArtista: string) {
  let existe = false;
  for (let index = 0; index < this.participante.artistaFavoritos.length; index++) {
    if (idArtista == this.participante.artistaFavoritos[index]) {
      existe = true;
      this.notification.artistaExistente();
    }
  }
  if (existe == false){
    this.participante.artistaFavoritos.push(idArtista);
    this.participanteService.editUser(this.idParticipante, this.participante).subscribe(res => {
      console.log("hecho");
    });
    this.notification.artistaFavorito();
  }
}
}