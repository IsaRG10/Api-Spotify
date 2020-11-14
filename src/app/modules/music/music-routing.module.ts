import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { PrincipalMusicaComponent } from './components/principal-musica/principal-musica.component';

const routes: Routes = [
  { path: '', component: PrincipalMusicaComponent, children:[
    { path: 'artista', component: ArtistaComponent}
  ]},
  { path: 'album/:id', component: AlbumComponent},
  { path: 'canciones/:id', component: CancionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
