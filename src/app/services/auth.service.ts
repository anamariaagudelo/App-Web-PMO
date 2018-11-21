import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerUser(nombre: string, apellido: string, email: string, pass: string, perfil: string, estado: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err));
  });
}

  loginEmail(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then( userData => resolve(userData),
    err => reject(err));
  });
  }

getAuth() {
  return this.afAuth.authState.map (auth => auth);
}
  logout() {
  return this.afAuth.auth.signOut();
  }
}
