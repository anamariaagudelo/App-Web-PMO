import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
   // return this.afAuth.auth.signInWithPopup (new firebase.auth.GoogleAuthProvider());

  }
getAuth() {
  return this.afAuth.authState.pipe(map (auth => auth));
}
  logout() {
  return this.afAuth.auth.signOut();
  }
}
