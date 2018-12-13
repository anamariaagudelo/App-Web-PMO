import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Srevices
import { AuthService } from './services/auth.service';
import { ClienteService } from './services/Cliente.service';
import { ProyectoService } from './services/proyecto.service';
import { LoginService } from './services/login.service';

// Interfaces
import { ClienteInterface } from './Models/cliente';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Messages
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
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
import { NavUsuariosComponent } from './components/control-acceso/nav-usuarios/nav-usuarios.component';
import { NavProyectosComponent } from './components/proyectos/nav-proyectos/nav-proyectos.component';
import { VisualizarProyectoComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { CrearClienteComponent } from './components/gestion-clientes/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/gestion-clientes/listar-cliente/listar-cliente.component';
import { NavClientesComponent } from './components/gestion-clientes/nav-clientes/nav-clientes.component';
import { VisualizarClienteComponent } from './components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component';
import { ModificarClienteComponent } from './components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component';
import { InfoClienteComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component';
import { InfoAdjuntosComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component';
// tslint:disable-next-line:max-line-length
import { NavVisualizarProyectoComponent } from './components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UploadFormComponent } from './components/proyectos/upload-form/upload-form.component';
import { ConsultComponent } from './components/consult/consult.component';
import { NabvarAdminComponent } from './components/shared/nabvar-admin/nabvar-admin.component';
import { NabvarConsultComponent } from './components/shared/nabvar-consult/nabvar-consult.component';
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
import { NavVisualizarProyectoAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component';
// tslint:disable-next-line:max-line-length
import { InfoAdjuntosAdminComponent } from './components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component';











@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectosComponent,
    ControlAccesoComponent,
    LoginComponent,
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
    VisualizarClienteComponent,
    ModificarClienteComponent,
    InfoClienteComponent,
    InfoAdjuntosComponent,
    NavVisualizarProyectoComponent,
    AdminComponent,
    NotFoundComponent,
    BuscadorComponent,
    UploadFormComponent,
    ConsultComponent,
    NabvarAdminComponent,
    NabvarConsultComponent,
    HomeConsultComponent,
    ProyectosConsultComponent,
    ListarproyectosConsultComponent,
    PerfilConsultComponent,
    HomeAdminComponent,
    ProyectosAdminComponent,
    ListarproyectosAdminComponent,
    GestionClientesAdminComponent,
    ControlAccesoAdminComponent,
    PerfilAdminComponent,
    BuscadorConsultComponent,
    BuscadorAdminComponent,
    VisualizarProyectosConsultComponent,
    InfoAdjuntosConsultComponent,
    InfoClienteConsultComponent,
    VisualizarProyectosAdminComponent,
    InfoClienteAdminComponent,
    NavVisualizarProyectoAdminComponent,
    InfoAdjuntosAdminComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    NgFlashMessagesModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, ClienteService, ProyectoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
