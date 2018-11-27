import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { ArgumentType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  proy: any;

  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {

    this.getBusquedaproyecto();

  }


  // PENDIENTE OPTIMIZAR BÚSQUEDA
  getBusquedaproyecto() {
    this.activateRoute.params.subscribe(params => {
      this.proy = this.proyectoService.buscarOneproyectos(params['termino']);
    });
    const collection = this.proy;
    collection.subscribe(docs => {
      this.proyecto = docs[0];
    });
}
}
