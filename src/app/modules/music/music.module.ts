import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { AlbumComponent } from './components/album/album.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { PrincipalMusicaComponent } from './components/principal-musica/principal-musica.component';
import { CardsComponent } from './components/cards/cards.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { CreardominioPipe } from 'src/app/shared/pipe/creardominio.pipe';
import { NoimagePipe } from 'src/app/shared/pipe/noimage.pipe';


@NgModule({
  declarations: [AlbumComponent, ArtistaComponent, PrincipalMusicaComponent, CardsComponent, CancionesComponent, CreardominioPipe, NoimagePipe],
  imports: [
    CommonModule,
    MusicRoutingModule
    
  ]
})
export class MusicModule { }
