import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { ClientLoginOutletComponent } from './client-login-outlet/client-login-outlet.component';
import { PublicHomeComponent } from '../public/public-home/public-home.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../services/client/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: PublicHomeComponent },
      { path: 'client/login', component: LoginComponent }
    ]
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    [RouterModule.forRoot(routes)],
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService
  ],
  declarations: [
    LoginComponent,
    ClientLoginOutletComponent
  ]
})
export class ClientModule { }
