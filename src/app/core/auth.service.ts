import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import {User} from './user';
import { auth } from 'firebase';



@Injectable()

export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject(null);



  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router ) {

   }
}
