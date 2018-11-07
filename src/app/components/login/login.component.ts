import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

/*
  onClicklGoogleLogin() {
    this.authService.loginGoogle()
    .then ((res) => {
       this.router.navigate(['/admin']);
      }).catch( err => console.log(err.message));
    }*/

    onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
  .then((res) => {
    this.router.navigate(['/admin']);
  }).catch((err) => {
    console.log(err);
    this.router.navigate(['/login']);
  });
}
}

