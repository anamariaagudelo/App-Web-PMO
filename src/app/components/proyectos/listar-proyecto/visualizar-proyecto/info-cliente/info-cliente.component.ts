import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../../../Models/proyecto';
import { ProyectoService } from '../../../../../services/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../../../Models/cliente';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css']
})
export class InfoClienteComponent implements OnInit {
  clientProyecto: string;
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

  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
    adjuntoUrl: [],

  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public proyectoService: ProyectoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getInfoClienteOfProyecto();
  }

  getInfoClienteOfProyecto() {
    this.clientProyecto = this.route.snapshot.params['cliente'];
    const collection = this.clienteService.getOneClienteofProyecto(this.clientProyecto);
    collection.subscribe(docs => {
      this.cliente = docs[0];
    });
  }
}

