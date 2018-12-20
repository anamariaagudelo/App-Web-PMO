import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproyectos-consult',
  templateUrl: './listarproyectos-consult.component.html',
  styleUrls: ['./listarproyectos-consult.component.css']
})
export class ListarproyectosConsultComponent implements OnInit {
  proyectos: ProyectoInterface[];

  constructor(
    public proycetoService: ProyectoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.todosProyectos();
  }
  todosProyectos() {
    this.proycetoService.getAllProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }

  applyFilter($event) {
    let termino = $event.target.value;
    termino = termino.toLowerCase();
    this.proyectos.filter = termino;
  }

}
