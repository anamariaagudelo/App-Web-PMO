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
  id: string;
  users: UserInterface[];

  usersColletion: AngularFirestoreCollection<UserInterface>;
  user: Observable<UserInterface>;
  userss: Observable<UserInterface[]>;
  usuario: UserInterface;


  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,


  ) {
    this.usersColletion = this.afs.collection('users', ref => ref);
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<UserInterface>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  addNewUser(user: UserInterface) {
    this.id = this.afs.createId();
    console.log(this.id);
    this.usersColletion.doc(this.id).set(user);
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  emailAndPassword(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
  }

  logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }


  getAllUsers(): Observable<UserInterface[]> {
    this.userss = this.usersColletion.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserInterface;
          // data.codigo = action.payload.doc.id;
          return data;
        });
      });
    return this.userss;
  }

  getOneUser(emailUser: string) {
    const collection = this.afs.collection('users', ref => ref.where('email', '==', emailUser)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as UserInterface;
        return data;
      });
    });

    return collection;
  }


  updateUser(usuario: UserInterface) {
    this.afs.collection('users', ref => ref.where('email', '==', usuario.email)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as UserInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }).subscribe(items => {
      items.forEach(user => {
        this.afs.doc(`users/${user.id}`).update({
          nombres: usuario.nombres,
          apellidos: usuario.apellidos,
          email: usuario.email,
          role: usuario.role,
          estado: usuario.estado
        });
      });
    }
    );

  }

}


