import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../Models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { ProyectoService } from '../../../services/proyecto.service';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../Models/cliente';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileItem } from '../../../Models/file-item';


@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  clientes: ClienteInterface[];
  archivos: FileItem[] = [];


  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
    adjuntoUrl: [],

  };
  ProyectoInterface: any;

  constructor(
    private authService: AuthService,
    private proyectoService: ProyectoService,
    private router: Router,
    public ngFlashMensaje: NgFlashMessagesModule,
    public clienteService: ClienteService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.todosClientes();
  }
  todosClientes() {
    this.clienteService.getAllClientes().subscribe(clientes => this.clientes = clientes);
  }

  selectFile(event) {
    const file = event.target.files[0];
    const nuevoArchivo = new FileItem(file);
    this.archivos.push(nuevoArchivo);
    console.log(this.archivos);
  }

    cargarArchivos () {
      this.proyectoService.cargarArchivosFirebase(this.archivos);
    }

    limpiarArchivos() {
      this.archivos = [];
      console.log(this.archivos);
    }


  onGuardarProyecto({ value }: { value: ProyectoInterface }) {
      this.proyectoService.addNewProyecto(value);
      console.log('Proyeco creado correctamente');
  }

}

