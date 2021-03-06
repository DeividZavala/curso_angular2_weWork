import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuepedroComponent } from './quepedro/quepedro.component';
import { AversijalaComponent } from './aversijala/aversijala.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ProductosService } from './aversijala/aversijala.service';
import { AlumnosService } from './alumnos/alumnos.service';
import { SpotifyService } from './spotify/spotify.service';;
import { App_Routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    QuepedroComponent,
    AversijalaComponent,
    AlumnosComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(App_Routes)
  ],
  providers: [ProductosService,AlumnosService,SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
