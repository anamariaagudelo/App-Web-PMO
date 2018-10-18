import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { RegistarComponent } from './components/control-acceso/registar/registar.component';
import { ListarComponent } from './components/control-acceso/listar/listar.component';
import { VisualizarUsuarioComponent } from './components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component';
import { ModificarUsuarioComponent } from './components/control-acceso/listar/modificar-usuario/modificar-usuario.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { ListarProyectoComponent } from './components/proyectos/listar-proyecto/listar-proyecto.component';
import { NavUsuariosComponent } from './components/control-acceso/nav-usuarios/nav-usuarios.component';
import { NavProyectosComponent } from './components/proyectos/nav-proyectos/nav-proyectos.component';
import { VisualizarProyectoComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { CrearClienteComponent } from './components/gestion-clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/gestion-clientes/listar-cliente/listar-cliente.component';
import { NavClientesComponent } from './components/gestion-clientes/nav-clientes/nav-clientes.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectosComponent,
    ControlAccesoComponent,
    LoguinComponent,
    RegistarComponent,
    ListarComponent,
    VisualizarUsuarioComponent,
    ModificarUsuarioComponent,
    NuevoProyectoComponent,
    ListarProyectoComponent,
    NavUsuariosComponent,
    NavProyectosComponent,
    VisualizarProyectoComponent,
    ModificarProyectoComponent,
    GestionClientesComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    NavClientesComponent,
     ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
