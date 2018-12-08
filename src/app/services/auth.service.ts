import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { UserInterface } from '../Models/user-interface';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersColletion: AngularFirestoreCollection<UserInterface>;
  user: Observable<UserInterface>;
  users: Observable<UserInterface[]>;


  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore) {
    this.usersColletion = this.afs.collection('users', ref => ref);
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<UserInterface>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

 /* private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
    .then(credentials => {
      this.router.navigate(['/admin']);
    });
  }*/

  addNewUser(user: UserInterface) {
    this.usersColletion.add(user);
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  emailAndPassword(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
  }


loginEmail(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
        err => reject(err));
  });
}
/*
  singUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

registerUser(nombre: string, apellido: string, email: string, pass: string, perfil: string, estado: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
        err => reject(err));
  });
}*/

logout() {
  return this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['/loguin']);
  });
}

getAuth() {
  return this.afAuth.authState.map(auth => auth);
}

getAllUsers(): Observable<UserInterface[]> {
  this.users = this.usersColletion.snapshotChanges()
  .map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.data() as UserInterface;
      // data.codigo = action.payload.doc.id;
      return data;
    });
  });
return this.users;
}

}
