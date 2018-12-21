import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar-admin',
  templateUrl: './nabvar-admin.component.html',
  styleUrls: ['./nabvar-admin.component.css']
})
export class NabvarAdminComponent implements OnInit {
  public userNombre: string;
  public userEmail: string;
  public userId: string;
  public isLogin: boolean;
  public isAdmin: boolean;


  constructor(
    public auth: AuthService,
    private router: Router,
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
    this.router.navigate(['/buscadorAdmin', termino.toUpperCase()]);

  }
}
