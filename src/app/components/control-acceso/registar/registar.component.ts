import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UserInterface } from '../../../Models/user-interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
})
export class RegistarComponent implements OnInit {

  public user: UserInterface = {
    nombres: '',
    apellidos: '',
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

  onSubmitAddUser(formGuardarUsers: NgForm) {
    this.authService.addNewUser(formGuardarUsers.value).then((res) => {
      this.ngFlashMensaje.showFlashMessage({messages: ['Usuario creado Correctamente'], dismissible: true, timeout: 5000, type: 'success'});
    this.router.navigate(['/listar']);
    }).catch((err) => {
      this.ngFlashMensaje.showFlashMessage({messages: [err], dismissible: true, timeout: 5000, type: 'danger'});
    });
  }
}
