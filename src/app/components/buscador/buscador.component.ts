import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  proy: any;
  filterValue = 'termino';

  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private proyectoService: ProyectoService,
    public ngFlashMensaje: NgFlashMessageService,
    public router: Router,
  ) { }

  ngOnInit() {

    this.getBusquedaproyecto();

  }


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

