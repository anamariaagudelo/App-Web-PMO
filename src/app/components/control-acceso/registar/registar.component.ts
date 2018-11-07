import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';



@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
})
export class RegistarComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private ngFlashMensaje: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
  this.authService.registerUser(this.email, this.password)
  .then((res) => {
    this.ngFlashMensaje.showFlashMessage({messages: ['Usuario creado Correctamente'], dismissible: true, timeout: 5000, type: 'success'});
    this.router.navigate(['/controlAcceso']);
  }).catch((err) => {
    this.ngFlashMensaje.showFlashMessage({messages: [err], dismissible: true, timeout: 5000, type: 'danger'});
  });
  }

}
