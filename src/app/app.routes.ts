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
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
