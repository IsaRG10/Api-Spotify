import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsComponent } from 'src/app/shared/components/reactive-forms/reactive-forms.component';
import { Participante } from 'src/app/shared/models/participantes';

@Component({
  selector: 'app-lista-participantes',
  templateUrl: './lista-participantes.component.html',
  styleUrls: ['./lista-participantes.component.css']
})
export class ListaParticipantesComponent implements OnInit {
@Input() participantes: Array<Participante>;
@Output() userToDelete:EventEmitter<number> = new EventEmitter();
@Output() userToAddOrEdit: EventEmitter<{action:string, participante:Participante}> = new EventEmitter();
userNuevo:Participante = new Participante();
userEdit:Participante= new Participante();
participante = {} as Participante;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editarUsuario(){
    this.userToAddOrEdit.emit({action: "edit", participante: this.userEdit});
  }

  crearUsuario(event){
    this.userToAddOrEdit.emit({action: "add", participante: event});
  }

  eliminar(idUser:number){
    this.userToDelete.emit(idUser);
  }

  setShowReactiveForm = () => {
    let dialogRef = this.dialog.open(ReactiveFormsComponent, {
      data: {...this.participante}
    });
    dialogRef.afterClosed().subscribe((event) => {
     this.editedHandlerParticipante(event.data);
    });
  }

  editedHandlerParticipante = (event) => {
    this.crearUsuario(event.value);
  }

}
