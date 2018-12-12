import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-listarproyectos-consult',
  templateUrl: './listarproyectos-consult.component.html',
  styleUrls: ['./listarproyectos-consult.component.css']
})
export class ListarproyectosConsultComponent implements OnInit {
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
