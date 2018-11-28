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

  updateProyecto(proyecto: ProyectoInterface) {
    this.afs.collection('proyectos', ref => ref.where('codigo', '==', proyecto.codigo)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ProyectoInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }).subscribe(items => {
      items.forEach(proyect => {
        this.afs.doc(`proyectos/${proyect.id}`).update({
          codigo: proyecto.codigo,
          nombre: proyecto.nombre,
          descripcion: proyecto.descripcion,
          cliente: proyecto.cliente,
        });
      });
    }
    );
  }

  getProyectoImagenes(codProyecto: string) {
    return this.afs.doc<ProyectoInterface>(`proyectos/${codProyecto}`).collection('uploads');

  }

  buscarOneproyectos(termino: string) {
    const collBusqueda = this.afs.collection('proyectos', ref => ref.where('codigo', '==', termino)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ProyectoInterface;
        return data;
      });
    });
    return collBusqueda;
  }

}
