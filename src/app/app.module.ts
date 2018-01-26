import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { ClientModule } from './client/client.module';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { AngularFireModule } from 'angularfire2';



@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
