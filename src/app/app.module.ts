import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { ListAddEventoComponent } from './pages/list-add-evento/list-add-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddEventoComponent,
    ListAddEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
