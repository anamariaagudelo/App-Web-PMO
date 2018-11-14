import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../Models/cliente';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  clientes: ClienteInterface[];

  constructor(
    public clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.todosClientes();
  }

  todosClientes() {
    this.clienteService.getAllClientes().subscribe(clientes => this.clientes = clientes);
  }
}
