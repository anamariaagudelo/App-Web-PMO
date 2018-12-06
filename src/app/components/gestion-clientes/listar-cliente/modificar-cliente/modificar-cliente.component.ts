import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente.service';
import { ClienteInterface } from '../../../../Models/cliente';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    public ngFlashMensaje: NgFlashMessageService

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
    this.authService.getAuth().subscribe (user => {
    value.codigo = this.codCliente;
    this.clienteService.updateCliente(value);
    this.ngFlashMensaje.showFlashMessage({messages: ['Cliente Modificado Correctamente'],
        dismissible: true, timeout: 5000, type: 'success'});
        this.router.navigate(['/visualizarCliente/' + this.codCliente]);
    });
    /*return Observable.throw(this.ngFlashMensaje.showFlashMessage({messages: ['Campos Obligatorios Requeridos'],
    dismissible: true, timeout: 5000, type: 'danger'}));*/

  }
}
