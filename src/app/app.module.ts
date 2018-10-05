import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GestionDatosComponent } from './components/gestion-datos/gestion-datos.component';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { RegistarComponent } from './components/control-acceso/registar/registar.component';
import { ListarComponent } from './components/control-acceso/listar/listar.component';
import { MercadosComponent } from './components/gestion-datos/mercados/mercados.component';
import { RegionesComponent } from './components/gestion-datos/regiones/regiones.component';
import { PaisesComponent } from './components/gestion-datos/paises/paises.component';
import { ClientesComponent } from './components/gestion-datos/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectosComponent,
    GestionDatosComponent,
    ControlAccesoComponent,
    LoguinComponent,
    RegistarComponent,
    ListarComponent,
    MercadosComponent,
    RegionesComponent,
    PaisesComponent,
    ClientesComponent,
     ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
