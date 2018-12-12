import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/Models/cliente';
import { ProyectoInterface } from 'src/app/Models/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ClienteService } from 'src/app/services/Cliente.service';

@Component({
  selector: 'app-info-cliente-consult',
  templateUrl: './info-cliente-consult.component.html',
  styleUrls: ['./info-cliente-consult.component.css']
})
export class InfoClienteConsultComponent implements OnInit {
  clientProyecto: string;
  cliente: ClienteInterface = {
    codigo: '',
    nombre: '',
    descripcion: '',
    region: '',
    pais: '',
    mercado: '',
    Ncontacto: '',
    Econtacto: ''
  };

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
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getInfoClienteOfProyecto();
  }

  getInfoClienteOfProyecto() {
    this.clientProyecto = this.route.snapshot.params['cliente'];
    const collection = this.clienteService.getOneClienteofProyecto(this.clientProyecto);
    collection.subscribe(docs => {
      this.cliente = docs[0];
    });
  }
}
