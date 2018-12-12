import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-buscador-consult',
  templateUrl: './buscador-consult.component.html',
  styleUrls: ['./buscador-consult.component.css']
})
export class BuscadorConsultComponent implements OnInit {
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
