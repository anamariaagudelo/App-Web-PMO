import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UserInterface } from '../../../Models/user-interface';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
})
export class RegistarComponent implements OnInit {

  public user: UserInterface = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    role: '',
    estado: '',
    };


  constructor(
    public authService: AuthService,
    public afs: AngularFirestore,
    public router: Router,
    public ngFlashMensaje: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser({value}: {value: UserInterface}) {
    this.authService.addNewUser(value);
    console.log(value);
        this.ngFlashMensaje.showFlashMessage({messages: ['Usuario creado Correctamente'],
        dismissible: true, timeout: 5000, type: 'success'});
        this.router.navigate(['/listar']);

  // tslint:disable-next-line:max-line-length
  /*this.authService.registerUser(this.user.nombre, this.user.apellido, this.user.email, this.user.password, this.user.perfil, this.user.estado)
  .then((res) => {
    console.log(res);
    this.ngFlashMensaje.showFlashMessage({messages: ['Usuario creado Correctamente'], dismissible: true, timeout: 5000, type: 'success'});
    this.router.navigate(['/listar']);
  }).catch((err) => {
    this.ngFlashMensaje.showFlashMessage({messages: [err], dismissible: true, timeout: 5000, type: 'danger'});
  });*/
  }

}
