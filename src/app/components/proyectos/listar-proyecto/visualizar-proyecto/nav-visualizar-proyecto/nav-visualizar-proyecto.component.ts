import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../../../Models/proyecto';
import { ProyectoService } from '../../../../../services/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ClienteService } from 'src/app/services/Cliente.service';

@Component({
  selector: 'app-nav-visualizar-proyecto',
  templateUrl: './nav-visualizar-proyecto.component.html',
  styleUrls: ['./nav-visualizar-proyecto.component.css']
})
export class NavVisualizarProyectoComponent implements OnInit {
  codProyecto: string;


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
  }

  getInfoProyecto() {
    this.codProyecto = this.route.snapshot.params['codigo'];
    const collection = this.proyectoService.getOneProyecto(this.codProyecto);
    collection.subscribe(docs => {
      this.proyecto = docs[0];
    });
  }

}
