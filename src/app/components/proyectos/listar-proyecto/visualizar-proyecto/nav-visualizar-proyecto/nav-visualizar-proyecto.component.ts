import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../../../Models/proyecto';
import { ProyectoService } from '../../../../../services/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from 'src/app/Models/cliente';

@Component({
  selector: 'app-nav-visualizar-proyecto',
  templateUrl: './nav-visualizar-proyecto.component.html',
  styleUrls: ['./nav-visualizar-proyecto.component.css']
})
export class NavVisualizarProyectoComponent implements OnInit {
  codProyecto: string;
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

  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public proyectoService: ProyectoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getInfoProyecto();
    this.getInfoClienteOfProyecto();
  }

  getInfoProyecto() {
    this.codProyecto = this.route.snapshot.params['codigo'];
    const collection = this.proyectoService.getOneProyecto(this.codProyecto);
    collection.subscribe(docs => {
      this.proyecto = docs[0];
    });
  }

  getInfoClienteOfProyecto() {
    this.clientProyecto = this.route.snapshot.params['cliente'];
    console.log('este es el cliente', this.clientProyecto);
    const collection = this.clienteService.getOneClienteofProyecto(this.clientProyecto);
    collection.subscribe(docs => {
      this.cliente = docs[0];
    });
  }
}
