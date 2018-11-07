import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
})
export class RegistarComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
  this.authService.registerUser(this.email, this.password)
  .then((res) => {
    this.router.navigate(['/controlAcceso']);
  }).catch((err) => {
    console.log(err);
  });
  }

}
