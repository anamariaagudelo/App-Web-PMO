import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {public userNombre: string;
  public userEmail: string;
  public userId: string;
  public isLogin: boolean;
  public isAdmin: boolean;

  constructor(
    public auth: AuthService,
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
          } else {
          this.isLogin = false;
          }
        });
      }

}
