import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../../Models/cliente';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/Cliente.service';


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
    private clienteService: ClienteService,
    private router: Router,
  ) {}

  ngOnInit() {
  }
  onGuardarCliente({value}: {value: ClienteInterface}) {
    this.authService.getAuth().subscribe ( user => {
      /*value.codigo = user.uid;
      value.nombre = user.displayName;*/
      this.clienteService.addNewCliente(value);
    });
    console.log(value);
  }
  }


