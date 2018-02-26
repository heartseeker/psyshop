
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { NavComponent } from './commons/templates/nav/nav.component';
import { HeroComponent } from './commons/templates/hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './commons/components/login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DoctorListComponent } from './commons/templates/doctor-list/doctor-list.component';

import { ServiceWorkerModule } from '@angular/service-worker';


const routes: Routes = [
  { path: '', component: PublicHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctors', component: DoctorListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent,
    NavComponent,
    HeroComponent,
    LoginComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
