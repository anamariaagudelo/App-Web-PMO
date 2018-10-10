import {RouterModule, Routes} from '@angular/router';
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
import { CrearMercadoComponent } from './components/gestion-datos/mercados/crear-mercado/crear-mercado.component';
import { ListarMercadoComponent } from './components/gestion-datos/mercados/listar-mercado/listar-mercado.component';
import { CrearRegionComponent } from './components/gestion-datos/regiones/crear-region/crear-region.component';
import { ListarRegionComponent } from './components/gestion-datos/regiones/listar-region/listar-region.component';
import { CrearPaisComponent } from './components/gestion-datos/paises/crear-pais/crear-pais.component';
import { ListarPaisComponent } from './components/gestion-datos/paises/listar-pais/listar-pais.component';
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
import { CrearClienteComponent } from './components/gestion-datos/clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/gestion-datos/clientes/listar-cliente/listar-cliente.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'gestionDatos', component: GestionDatosComponent},
    {path: 'controlAcceso', component: ControlAccesoComponent},
    {path: 'loguin', component: LoguinComponent},
    {path: 'registar', component: RegistarComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'mercados', component: MercadosComponent},
    {path: 'regiones', component: RegionesComponent},
    {path: 'paises', component: PaisesComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'crearMercado', component: CrearMercadoComponent},
    {path: 'listarMercado', component: ListarMercadoComponent},
    {path: 'crearRegion', component: CrearRegionComponent},
    {path: 'listarRegion', component: ListarRegionComponent},
    {path: 'crearPais', component: CrearPaisComponent},
    {path: 'listarPais', component: ListarPaisComponent},
    {path: 'visualizarUsuario', component: VisualizarUsuarioComponent},
    {path: 'modificarUsuario', component:  ModificarUsuarioComponent},
    {path: 'visualizarMercado', component:  VisualizarMercadoComponent},
    {path: 'modificarMercado', component:  ModificarMercadoComponent},
    {path: 'visualizarRegion', component:  VisualizarRegionComponent},
    {path: 'modificarRegion', component:  ModificarRegionComponent},
    {path: 'visualizarPais', component:  VisualizarPaisComponent},
    {path: 'modificarPais', component:  ModificarPaisComponent},
    {path: 'nuevoProyecto', component:  NuevoProyectoComponent},
    {path: 'listarProyecto', component:  ListarProyectoComponent},
    {path: 'crearCliente', component:  CrearClienteComponent},
    {path: 'listarCliente', component:  ListarClienteComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
