import { Injectable } from '@angular/core';
import { ProyectoInterface } from '../Models/proyecto';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as faker from 'faker';
import { FileItem } from '../Models/file-item';
import { finalize } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private basePath = 'adjuntos';
  id: string;
  archivo: {url: string, nombre: string };
  adjuntouRL: string[];
  proyectoColletion: AngularFirestoreCollection<ProyectoInterface>;
  proyectoDoc: AngularFirestoreDocument<ProyectoInterface>;
  proyectos: Observable<ProyectoInterface[]>;
  proyecto: ProyectoInterface;


  constructor(
    private afs: AngularFirestore) {
    this.proyectoColletion = this.afs.collection('proyectos', ref => ref);
  }

  addNewProyecto(proyecto: ProyectoInterface) {
    this.id = this.afs.createId();
    console.log(this.id);
    this.proyectoColletion.doc(this.id).set(proyecto);
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
          adjuntos: proyecto.adjuntoUrl,
        });
      });
    }
    );
  }

  addNewArchivo(archivo: {url: string, nombre: string}) {
    const docRef = this.proyectoColletion.doc(this.id).ref;
    this.proyectoColletion.doc(this.id).ref.firestore.runTransaction((t) => {
      return t.get(docRef).then((doc) => {
        // doc doesn't exist; can't update
        if (!doc.exists) {
          console.log('Documento no existe');
          return;
        }
        // update the users array after getting it from Firestore.
        const newURL = doc.get('adjuntoUrl');
        newURL.push(archivo);
        console.log('esto es lo que tiene el objeto archivo', archivo);
        t.set(docRef, { adjuntoUrl: newURL }, { merge: true });
      });
    });
  }


  cargarArchivosFirebase(archivos: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const item of archivos) {
      if (item.progreso >= 100) {
        continue;
      }
      storageRef.child(`${this.basePath}${item.nombreAdjunto}`)
        .put(item.adjunto)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
        }).then(downloadURL => {
          console.log(`Successfully uploaded file and got download link - ${downloadURL} /${ item.nombreAdjunto}`);
          const PDFFileUrl: string = downloadURL;
          const nombre1 = item.nombreAdjunto;
          this.archivo = {nombre: nombre1, url: PDFFileUrl};

          // this.adjuntouRL.push(PDFFileUrl);
          this.addNewArchivo(this.archivo);
        })
        .catch(error => {
          // Use to signal error if something goes wrong.
          console.log(`Failed to upload file and get link - ${error}`);
        });
      console.log(this.adjuntouRL);
    }
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
