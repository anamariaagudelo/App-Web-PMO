import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../../Models/cliente';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/Cliente.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { error } from 'util';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  cliente: ClienteInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    region: '',
    pais: '',
    mercado: '',
    Ncontacto: '',
    Econtacto: ''
  };

  regiones = [{
    nombre: 'EUROPA'
  },
  {
    nombre: 'LATINOAMERICA'
  },
  {
    nombre: 'AFRICA'
  },
  ];

  mercados = [{
    nombre: 'T&O'
  },
  {
    nombre: 'U&I'
  },
  {
    nombre: 'S&M'
  },
  {
    nombre: 'PREVENTA'
  },
  {
    nombre: 'PRODUCTOS INTERNOS'
  },
  ];

  constructor(
    private authService: AuthService,
    private clienteService: ClienteService,
    private router: Router,
    public ngFlashMensaje: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onGuardarCliente(formGuardarCliente: NgForm) {
    this.clienteService.addNewCliente(formGuardarCliente.value);
    this.ngFlashMensaje.showFlashMessage({messages: ['Cliente Creado correctamente'],
        dismissible: true, timeout: 5000, type: 'success'});
    this.router.navigate(['/listarCliente']);
  }
}



