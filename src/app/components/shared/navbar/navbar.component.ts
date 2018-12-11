import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/Models/user-interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../../../services/login.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email: string;
  password: string;
  users: UserInterface[];
  userRol = 'admin';
  public userNombre: string;
  public userEmail: string;
  public userId: string;
  public isLogin: boolean;
  public isAdmin: boolean;


  constructor(
    public auth: AuthService,
    private router: Router,
    private afs: AngularFirestore,
    public login: LoginService,

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
    this.router.navigate(['/buscador', termino]);

  }

 }
