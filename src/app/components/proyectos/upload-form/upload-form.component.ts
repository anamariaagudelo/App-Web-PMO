import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/Models/cliente';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ClienteService } from 'src/app/services/Cliente.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  clientes: ClienteInterface[];
  codProyecto: string;

  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    public ngFlashMensaje: NgFlashMessageService,
    public clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.getInfoModCliente();
    this.todosClientes();
   }

   todosClientes() {
    this.clienteService.getAllClientes().subscribe(clientes => this.clientes = clientes);
  }

   getInfoModCliente() {
    this.codProyecto = this.route.snapshot.params['codigo'];
    const collection = this.proyectoService.getOneProyecto(this.codProyecto);
    collection.subscribe(docs => {
      this.proyecto = docs[0];
    });
  }

  onModificarProyecto({value}: {value: ProyectoInterface}) {
    this.authService.getAuth().subscribe (user => {
    value.codigo = this.codProyecto;
    this.proyectoService.updateProyecto(value);
    this.ngFlashMensaje.showFlashMessage({messages: ['ProyectoModificado Correctamente'],
        dismissible: true, timeout: 5000, type: 'success'});
        this.router.navigate(['/listarProyecto']);
    });

  }

}
