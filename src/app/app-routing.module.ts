import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ControlAccesoComponent } from './components/control-acceso/control-acceso.component';
import { LoginComponent } from './components/shared/navbar/login/login.component';
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
import { InfoClienteComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component';
import { InfoAdjuntosComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UploadFormComponent } from './components/proyectos/upload-form/upload-form.component';
import { ConsultComponent } from './components/consult/consult.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeConsultComponent } from './components/consult/home-consult/home-consult.component';
import { ProyectosConsultComponent } from './components/consult/proyectos-consult/proyectos-consult.component';
// tslint:disable-next-line:max-line-length
import { ListarproyectosConsultComponent } from './components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component';
import { PerfilConsultComponent } from './components/consult/perfil-consult/perfil-consult.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ProyectosAdminComponent } from './components/admin/proyectos-admin/proyectos-admin.component';
import { ListarproyectosAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component';
import { GestionClientesAdminComponent } from './components/admin/gestion-clientes-admin/gestion-clientes-admin.component';
import { ControlAccesoAdminComponent } from './components/admin/control-acceso-admin/control-acceso-admin.component';
import { PerfilAdminComponent } from './components/admin/perfil-admin/perfil-admin.component';
import { BuscadorConsultComponent } from './components/consult/buscador-consult/buscador-consult.component';
import { BuscadorAdminComponent } from './components/admin/buscador-admin/buscador-admin.component';
// tslint:disable-next-line:max-line-length
import { VisualizarProyectosConsultComponent} from './components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component';
// tslint:disable-next-line:max-line-length
import { InfoAdjuntosConsultComponent } from './components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component';
// tslint:disable-next-line:max-line-length
import { InfoClienteConsultComponent } from './components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component';
// tslint:disable-next-line:max-line-length
import { VisualizarProyectosAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component';
// tslint:disable-next-line:max-line-length
import { InfoClienteAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component';
// tslint:disable-next-line:max-line-length
import { InfoAdjuntosAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'homeConsult', component: HomeConsultComponent, canActivate: [AuthGuard]},
    {path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard]},
    {path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard]},
    {path: 'proyectosConsult', component: ProyectosConsultComponent, canActivate: [AuthGuard]},
    {path: 'proyectosAdmin', component: ProyectosAdminComponent, canActivate: [AuthGuard]},
    {path: 'controlAcceso', component: ControlAccesoComponent , canActivate: [AuthGuard]},
    {path: 'controlAccesoAdmin', component: ControlAccesoAdminComponent , canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registar', component: RegistarComponent, canActivate: [AuthGuard]},
    {path: 'listar', component: ListarComponent, canActivate: [AuthGuard]},
    {path: 'visualizarUsuario/:email', component: VisualizarUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'modificarUsuario/:email', component:  ModificarUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'nuevoProyecto', component:  NuevoProyectoComponent, canActivate: [AuthGuard]},
    {path: 'listarProyecto', component:  ListarProyectoComponent, canActivate: [AuthGuard]},
    {path: 'listarProyectosConsult', component:  ListarproyectosConsultComponent, canActivate: [AuthGuard]},
    {path: 'listarProyectosAdmin', component:  ListarproyectosAdminComponent, canActivate: [AuthGuard] },
    {path: 'VisualizarProyecto/:codigo', component:  VisualizarProyectoComponent, canActivate: [AuthGuard]},
    {path: 'VisualizarProyectoConsult/:codigo', component:  VisualizarProyectosConsultComponent, canActivate: [AuthGuard]},
    {path: 'VisualizarProyectoAdmin/:codigo', component:  VisualizarProyectosAdminComponent, canActivate: [AuthGuard] },
    {path: 'modificarProyecto/:codigo', component:  ModificarProyectoComponent, canActivate: [AuthGuard] },
    {path: 'gestionClientes', component:  GestionClientesComponent, canActivate: [AuthGuard] },
    {path: 'gestionClientesAdmin', component:  GestionClientesAdminComponent, canActivate: [AuthGuard] },
    {path: 'crearCliente', component:  CrearClienteComponent, canActivate: [AuthGuard]  },
    {path: 'listarCliente', component:  ListarClienteComponent, canActivate: [AuthGuard] },
    {path: 'visualizarCliente/:codigo', component:  VisualizarClienteComponent, canActivate: [AuthGuard]  },
    {path: 'modificarCliente/:codigo', component:  ModificarClienteComponent, canActivate: [AuthGuard] },
    {path: 'infoCliente/:cliente', component:  InfoClienteComponent, canActivate: [AuthGuard] },
    {path: 'infoClienteConsult/:cliente', component:  InfoClienteConsultComponent, canActivate: [AuthGuard]  },
    {path: 'infoClienteAdmin/:cliente', component:  InfoClienteAdminComponent, canActivate: [AuthGuard]  },
    {path: 'infoAdjuntos/:codigo', component:   InfoAdjuntosComponent, canActivate: [AuthGuard]},
    {path: 'infoAdjuntosConsult/:codigo', component:   InfoAdjuntosConsultComponent, canActivate: [AuthGuard]},
    {path: 'info/Adjuntos/Admin/:codigo', component:   InfoAdjuntosAdminComponent, canActivate: [AuthGuard] },
    {path: 'admin', component:   AdminComponent, canActivate: [AuthGuard]},
    {path: 'consult', component:   ConsultComponent, canActivate: [AuthGuard]},
    {path: 'buscador/:termino', component:   BuscadorComponent, canActivate: [AuthGuard]},
    {path: 'buscadorConsult/:termino', component:   BuscadorConsultComponent, canActivate: [AuthGuard]},
    {path: 'buscadorAdmin/:termino', component:   BuscadorAdminComponent, canActivate: [AuthGuard]},
    {path: 'nuevoProyectoAdjuntos/:codigo', component:   UploadFormComponent, canActivate: [AuthGuard]},
    {path: 'perfilConsult', component:   PerfilConsultComponent, canActivate: [AuthGuard]},
    {path: 'perfilAdmin', component:   PerfilAdminComponent, canActivate: [AuthGuard]},
    {path: 'navbar', component:   NavbarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
