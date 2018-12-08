import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userNombre: string;
  public userEmail: string;
  public userId: string;
  public isLogin: boolean;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
  }

  onComprobarUserLogin() {
    this.auth.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userNombre = auth.displayName,
        this.userEmail = auth.email;
        this.userId = auth.uid;
      } else {
      this.isLogin = false;
      }
    });
  }

  onLogout() {
   this.auth.logout();
  }

  buscarProyecto(termino: string) {
    // console.log(termino);
    this.router.navigate(['/buscador', termino]);

  }
}
