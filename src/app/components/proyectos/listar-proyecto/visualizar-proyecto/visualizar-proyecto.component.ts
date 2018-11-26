import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../../Models/proyecto';
import { ProyectoService } from '../../../../services/proyecto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-visualizar-proyecto',
  templateUrl: './visualizar-proyecto.component.html',
  styleUrls: ['./visualizar-proyecto.component.css']
})
export class VisualizarProyectoComponent implements OnInit {
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
