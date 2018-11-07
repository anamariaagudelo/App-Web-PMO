import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userNombre: string;
  public userEmail: string;
  public userPicture: string;
  public userId: string;
  public isLogin: boolean;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    // this.onComprobarUserLogin();
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userNombre = auth.displayName;
        this.userEmail = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }
/*
  onComprobarUserLogin() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userNombre = auth.displayName,
        this.userEmail = auth.email;
        this.userPicture = auth.photoURL;
        this.userId = auth.uid;
      } else {
      this.isLogin = false;
      }
    });
  }*/

  onLogout() {
   this.authService.logout();
  }
}
