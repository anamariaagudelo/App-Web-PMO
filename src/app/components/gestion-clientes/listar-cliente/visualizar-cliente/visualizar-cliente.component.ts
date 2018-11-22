import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../../Models/cliente';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {
  codCliente: string;

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getInfoCliente();

  }

  getInfoCliente() {
    this.codCliente = this.route.snapshot.params['codigo'];
    const collection = this.clienteService.getOneCliente(this.codCliente);
    collection.subscribe(docs => {
      this.cliente = docs[0];
    });
  }

}

