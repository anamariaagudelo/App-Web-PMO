import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-info-adjuntos-consult',
  templateUrl: './info-adjuntos-consult.component.html',
  styleUrls: ['./info-adjuntos-consult.component.css']
})
export class InfoAdjuntosConsultComponent implements OnInit {
  codProyecto: string;

  proyecto: ProyectoInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cliente: '',
    adjuntoUrl: [],

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

