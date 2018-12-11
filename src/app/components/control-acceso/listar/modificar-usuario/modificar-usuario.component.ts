import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  emailUser: string;

  user: UserInterface = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    role: '',
    estado: '',
  };
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getInfoModUsuario();
  }
  getInfoModUsuario() {
    this.emailUser = this.route.snapshot.params['email'];
    const collection = this.authService.getOneUser(this.emailUser);
    collection.subscribe(docs => {
      this.user = docs[0];
    });
  }

  onModificarUser({value}: {value: UserInterface}) {
    this.authService.getAuth().subscribe (user => {
    value.email = this.emailUser;
    this.authService.updateUser(value);
    console.log('Modificado Correctamente');
    this.router.navigate(['/visualizarUsuario/' + this.emailUser]);
    });
    /*return Observable.throw(this.ngFlashMensaje.showFlashMessage({messages: ['Campos Obligatorios Requeridos'],
    dismissible: true, timeout: 5000, type: 'danger'}));*/

  }

}
