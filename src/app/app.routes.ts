import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { LoginComponent } from './components/login/login.component';
import { RegistarComponent } from './components/control-acceso/registar/registar.component';
import { ListarComponent } from './components/control-acceso/listar/listar.component';
import { VisualizarUsuarioComponent } from './components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component';
import { ModificarUsuarioComponent } from './components/control-acceso/listar/modificar-usuario/modificar-usuario.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { ListarProyectoComponent } from './components/proyectos/listar-proyecto/listar-proyecto.component';
import { VisualizarProyectoComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { CrearClienteComponent } from './components/gestion-clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/gestion-clientes/listar-cliente/listar-cliente.component';
import { VisualizarClienteComponent } from './components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component';
import { ModificarClienteComponent } from './components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component';
import { InfoProyectosComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-proyectos/info-proyectos.component';
import { InfoClienteComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component';
import { InfoAdjuntosComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'controlAcceso', component: ControlAccesoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registar', component: RegistarComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'visualizarUsuario', component: VisualizarUsuarioComponent},
    {path: 'modificarUsuario', component:  ModificarUsuarioComponent},
    {path: 'nuevoProyecto', component:  NuevoProyectoComponent},
    {path: 'listarProyecto', component:  ListarProyectoComponent},
    {path: 'visualizarProyecto', component:  VisualizarProyectoComponent},
    {path: 'modificarProyecto', component:  ModificarProyectoComponent, canActivate: [AuthGuard] },
    {path: 'gestionClientes', component:  GestionClientesComponent },
    {path: 'crearCliente', component:  CrearClienteComponent  },
    {path: 'listarCliente', component:  ListarClienteComponent },
    {path: 'visualizarCliente/:codigo', component:  VisualizarClienteComponent, canActivate: [AuthGuard]  },
    {path: 'modificarCliente/:codigo', component:  ModificarClienteComponent, canActivate: [AuthGuard] },
    {path: 'infoProyectos', component:  InfoProyectosComponent},
    {path: 'infoCliente', component:  InfoClienteComponent },
    {path: 'infoAdjuntos', component:   InfoAdjuntosComponent},
    {path: 'admin', component:   AdminComponent, canActivate: [AuthGuard] },
    {path: '**', component: NotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
