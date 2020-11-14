import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { PrincipalComponent } from './shared/components/principal/principal.component';
import { LoginComponent } from './shared/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth.service';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MateralTableComponent } from './shared/components/materal-table/material-table.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ReactiveFormsComponent } from './shared/components/reactive-forms/reactive-forms.component';
import { BuscadorArtistasComponent } from './shared/components/buscador-artistas/buscador-artistas.component';
import { TarjetasComponent } from './shared/components/tarjetas/tarjetas.component';
import { CreardominioPipe } from './shared/pipe/creardominio.pipe';
import { BuscadorCancionesComponent } from './shared/components/buscador-canciones/buscador-canciones.component';
import { TarjetaCancionesComponent } from './shared/components/tarjeta-canciones/tarjeta-canciones.component';
import { NoimagePipe } from './shared/pipe/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MateralTableComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
