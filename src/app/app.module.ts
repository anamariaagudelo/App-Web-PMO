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
import { NavMercadosComponent } from './components/gestion-datos/mercados/nav-mercados/nav-mercados.component';
import { CrearMercadoComponent } from './components/gestion-datos/mercados/crear-mercado/crear-mercado.component';
import { ListarMercadoComponent } from './components/gestion-datos/mercados/listar-mercado/listar-mercado.component';
import { CrearRegionComponent } from './components/gestion-datos/regiones/crear-region/crear-region.component';
import { ListarRegionComponent } from './components/gestion-datos/regiones/listar-region/listar-region.component';
import { NavRegionesComponent } from './components/gestion-datos/regiones/nav-regiones/nav-regiones.component';
import { CrearPaisComponent } from './components/gestion-datos/paises/crear-pais/crear-pais.component';
import { ListarPaisComponent } from './components/gestion-datos/paises/listar-pais/listar-pais.component';
import { NavPaisComponent } from './components/gestion-datos/paises/nav-pais/nav-pais.component';
import { VisualizarUsuarioComponent } from './components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component';
import { ModificarUsuarioComponent } from './components/control-acceso/listar/modificar-usuario/modificar-usuario.component';
// tslint:disable-next-line:max-line-length
import { VisualizarMercadoComponent } from './components/gestion-datos/mercados/listar-mercado/visualizar-mercado/visualizar-mercado.component';
// tslint:disable-next-line:max-line-length
import { ModificarMercadoComponent } from './components/gestion-datos/mercados/listar-mercado/modificar-mercado/modificar-mercado.component';
import { VisualizarRegionComponent } from './components/gestion-datos/regiones/listar-region/visualizar-region/visualizar-region.component';
import { ModificarRegionComponent } from './components/gestion-datos/regiones/listar-region/modificar-region/modificar-region.component';
import { VisualizarPaisComponent } from './components/gestion-datos/paises/listar-pais/visualizar-pais/visualizar-pais.component';
import { ModificarPaisComponent } from './components/gestion-datos/paises/listar-pais/modificar-pais/modificar-pais.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { ListarProyectoComponent } from './components/proyectos/listar-proyecto/listar-proyecto.component';
import { NavUsuariosComponent } from './components/control-acceso/nav-usuarios/nav-usuarios.component';
import { NavProyectosComponent } from './components/proyectos/nav-proyectos/nav-proyectos.component';
import { ClientesComponent } from './components/gestion-datos/clientes/clientes.component';
import { CrearClienteComponent } from './components/gestion-datos/clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/gestion-datos/clientes/listar-cliente/listar-cliente.component';
import { NavClientesComponent } from './components/gestion-datos/clientes/nav-clientes/nav-clientes.component';
// tslint:disable-next-line:max-line-length
import { VisualizarClienteComponent } from './components/gestion-datos/clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component';
// tslint:disable-next-line:max-line-length
import { ModificarClienteComponent } from './components/gestion-datos/clientes/listar-cliente/modificar-cliente/modificar-cliente.component';
import { VisualizarProyectoComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component';





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
    NavMercadosComponent,
    CrearMercadoComponent,
    ListarMercadoComponent,
    CrearRegionComponent,
    ListarRegionComponent,
    NavRegionesComponent,
    CrearPaisComponent,
    ListarPaisComponent,
    NavPaisComponent,
    VisualizarUsuarioComponent,
    ModificarUsuarioComponent,
    VisualizarMercadoComponent,
    ModificarMercadoComponent,
    VisualizarRegionComponent,
    ModificarRegionComponent,
    VisualizarPaisComponent,
    ModificarPaisComponent,
    NuevoProyectoComponent,
    ListarProyectoComponent,
    NavUsuariosComponent,
    NavProyectosComponent,
    ClientesComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    NavClientesComponent,
    VisualizarClienteComponent,
    ModificarClienteComponent,
    VisualizarProyectoComponent,
    ModificarProyectoComponent,
     ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
