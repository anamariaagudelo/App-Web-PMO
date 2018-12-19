import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { UserInterface } from '../Models/user-interface';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { PreloaderService } from './preloader.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emailUser: string;
  public isAdmin: boolean;
  public email: string;
  public password: string;

  user: UserInterface = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    role: '',
    estado: '',
  };

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router,
    public preloader: PreloaderService,

  ) { }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
      });
  }

  comprobar(email: string) {
    this.emailUser = email;
          const collection = this.authService.getOneUser(this.emailUser);
          collection.subscribe(docs => {
            this.user = docs[0];
            console.log(this.user);
            if (this.user.role === 'ADMIN') {
              this.router.navigate(['/admin']);
              this.isAdmin = true;
              console.log (this.isAdmin);
            } else if (this.user.role === 'CONSULT') {
              this.router.navigate(['/consult']);
              this.isAdmin = false;
            }
          });
  }

}
