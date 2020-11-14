import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { PrincipalParticipantesComponent } from './components/principal-participantes/principal-participantes.component';
import { DetalleParticipanteComponent } from './components/detalle-participante/detalle-participante.component';
import { ListaParticipantesComponent } from './components/lista-participantes/lista-participantes.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ArtistasFavoritosComponent } from './components/artistas-favoritos/artistas-favoritos.component';
import { BuscadorArtistasComponent } from 'src/app/shared/components/buscador-artistas/buscador-artistas.component';
import { TarjetasComponent } from 'src/app/shared/components/tarjetas/tarjetas.component';
import { TarjetaCancionesComponent } from 'src/app/shared/components/tarjeta-canciones/tarjeta-canciones.component';
import { BuscadorCancionesComponent } from 'src/app/shared/components/buscador-canciones/buscador-canciones.component';


@NgModule({
  declarations: [
    PrincipalParticipantesComponent, 
    DetalleParticipanteComponent, 
    ListaParticipantesComponent, 
    AdminComponent, 
    ArtistasFavoritosComponent,
    BuscadorArtistasComponent,
    TarjetasComponent,
    TarjetaCancionesComponent,
    BuscadorCancionesComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    MatTableModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ParticipantsModule { }
