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
import { NavMercadosComponent } from './components/gestion-datos/mercados/nav-mercados/nav-mercados.component';
import { CrearMercadoComponent } from './components/gestion-datos/mercados/crear-mercado/crear-mercado.component';
import { ListarMercadoComponent } from './components/gestion-datos/mercados/listar-mercado/listar-mercado.component';
import { CrearRegionComponent } from './components/gestion-datos/regiones/crear-region/crear-region.component';
import { ListarRegionComponent } from './components/gestion-datos/regiones/listar-region/listar-region.component';
import { NavRegionesComponent } from './components/gestion-datos/regiones/nav-regiones/nav-regiones.component';
import { CrearPaisComponent } from './components/gestion-datos/paises/crear-pais/crear-pais.component';
import { ListarPaisComponent } from './components/gestion-datos/paises/listar-pais/listar-pais.component';
import { NavPaisComponent } from './components/gestion-datos/paises/nav-pais/nav-pais.component';


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
    NavMercadosComponent,
    CrearMercadoComponent,
    ListarMercadoComponent,
    CrearRegionComponent,
    ListarRegionComponent,
    NavRegionesComponent,
    CrearPaisComponent,
    ListarPaisComponent,
    NavPaisComponent,
     ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
