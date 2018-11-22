import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../../Models/proyecto';
import { ProyectoService } from '../../../services/proyecto.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent implements OnInit {
  proyectos: ProyectoInterface[];

  constructor(
    public proycetoService: ProyectoService,
  ) { }

  ngOnInit() {
    this.todosProyectos();
  }
  todosProyectos() {
    this.proycetoService.getAllProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }
}
