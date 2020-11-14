import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ArtistasFavoritosComponent } from './components/artistas-favoritos/artistas-favoritos.component';
import { DetalleParticipanteComponent } from './components/detalle-participante/detalle-participante.component';
import { ListaParticipantesComponent } from './components/lista-participantes/lista-participantes.component';
import { PrincipalParticipantesComponent } from './components/principal-participantes/principal-participantes.component';

const routes: Routes = [
  { path: '', component: PrincipalParticipantesComponent, children:[
    { path: 'admin', component: AdminComponent},
    { path: 'lista-participantes', component: ListaParticipantesComponent}
  ]},
  { path: 'admin/detalle-participante/:id', component: DetalleParticipanteComponent},
  { path: 'admin/artistas-favoritos/:id', component: ArtistasFavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
