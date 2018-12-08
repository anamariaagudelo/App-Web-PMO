import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;


  constructor(
    public authService: AuthService,
    public router: Router,
    public ngFlashMensaje: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

    onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
   .then((res) => {
    console.log(this.email, this.password);
    this.ngFlashMensaje.showFlashMessage({messages: ['El usuario inició sesión correctamente'],
     dismissible: true, timeout: 5000, type: 'success'});
    this.router.navigate(['/admin']);
  }).catch((err) => {
    this.ngFlashMensaje.showFlashMessage({messages: [err],
     dismissible: true, timeout: 5000, type: 'danger'});
    this.router.navigate(['/login']);
  });
}
}

