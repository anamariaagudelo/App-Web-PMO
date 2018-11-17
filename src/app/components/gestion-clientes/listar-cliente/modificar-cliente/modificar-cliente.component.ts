import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../../Models/cliente';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {
  codCliente: string;

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getInfoModCliente();
  }

  getInfoModCliente() {
    this.codCliente = this.route.snapshot.params['codigo'];
    const collection = this.clienteService.getOneCliente(this.codCliente);

    collection.subscribe(docs => {
      this.cliente = docs[0];
    });
  }


  onModificarCliente({value}: {value: ClienteInterface}) {
    console.log('entre al metodo');
    value.codigo = this.codCliente;
    console.log(value);
    this.clienteService.updateCliente(value);
    // this.router.navigate(['/visualizarCliente/' + this.codCliente]);

  }
}
