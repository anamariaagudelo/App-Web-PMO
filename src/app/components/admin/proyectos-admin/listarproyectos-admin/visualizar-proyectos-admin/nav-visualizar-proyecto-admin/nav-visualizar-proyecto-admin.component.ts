import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ClienteService } from 'src/app/services/Cliente.service';

@Component({
  selector: 'app-nav-visualizar-proyecto-admin',
  templateUrl: './nav-visualizar-proyecto-admin.component.html',
  styleUrls: ['./nav-visualizar-proyecto-admin.component.css']
})
export class NavVisualizarProyectoAdminComponent implements OnInit {
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
