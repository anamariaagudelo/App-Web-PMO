import { Injectable } from '@angular/core';
import { ProyectoInterface } from '../Models/proyecto';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyectoColletion: AngularFirestoreCollection<ProyectoInterface>;
  proyectoDoc: AngularFirestoreDocument<ProyectoInterface>;
  proyectos: Observable<ProyectoInterface[]>;
  proyecto: ProyectoInterface;

  constructor(
    private afs: AngularFirestore) {
    this.proyectoColletion = this.afs.collection('proyectos', ref => ref);
}

addNewProyecto(proyecto: ProyectoInterface) {
  this.proyectoColletion.add(proyecto);
}

getAllProyectos(): Observable<ProyectoInterface[]> {
  this.proyectos = this.proyectoColletion.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ProyectoInterface;
        // data.codigo = action.payload.doc.id;
        return data;
      });
    });
  return this.proyectos;
}

getOneProyecto(codProyecto: string) {
  const collection = this.afs.collection('proyectos', ref => ref.where('codigo', '==', codProyecto)).snapshotChanges().map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as ProyectoInterface;
      return data;
    });
  });

  return collection;
}
}
