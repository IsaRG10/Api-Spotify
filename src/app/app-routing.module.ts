import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { PrincipalComponent } from './shared/components/principal/principal.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component:LoginComponent },
  { path: 'principal', canActivate: [AuthGuardService], children: [
    { path: '', component:PrincipalComponent},
    { path: 'participants', loadChildren: () => import('../app/modules/participants/participants.module').then(m => m.ParticipantsModule)},
    { path: 'music', loadChildren: () => import('../app/modules/music/music.module').then(m => m.MusicModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
