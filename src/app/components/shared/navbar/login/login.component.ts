import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UserInterface } from 'src/app/Models/user-interface';
import { LoginService } from '../../../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
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
    public authService: AuthService,
    public router: Router,
    public ngFlashMensaje: NgFlashMessageService,
    public loginService: LoginService,
  ) { }

  ngOnInit() {
  }




  public onSubmitLogin() {
  this.loginService.loginEmail(this.email, this.password)
   .then((res) => {
    console.log(this.email, this.password);
     this.loginService.comprobar(this.email);
    this.ngFlashMensaje.showFlashMessage({messages: ['El usuario inició sesión correctamente'],
     dismissible: true, timeout: 5000, type: 'success'});
  }).catch((err) => {
    this.ngFlashMensaje.showFlashMessage({messages: [err],
     dismissible: true, timeout: 5000, type: 'danger'});
    this.router.navigate(['/login']);
  });
}
}

