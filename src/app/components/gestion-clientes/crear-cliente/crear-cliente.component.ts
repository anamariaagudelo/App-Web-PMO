import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../../Models/cliente';
import { AuthService } from '../../../services/auth.service';
import { ClienteService } from '../../../services/Cliente.service';
import { Router } from '@angular/router';


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
    ncontacto: '',
    econtacto: ''
  };



  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
  }
  onGuardarCliente({value}: {value: ClienteInterface}) {
    /*this.authService.getAuth().subscribe ( user => {
      value.codigo = user.uid;
      value.nombre = user.displayName;
      this.clienteService.addNewReceta(value);
    });*/
    console.log(value);
  }
  }


