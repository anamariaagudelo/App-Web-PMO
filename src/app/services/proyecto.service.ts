import { Injectable } from '@angular/core';
import { ProyectoInterface } from '../Models/proyecto';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Upload } from '../Models/file-item';
import * as faker from 'faker';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private basePath = 'adjuntos';
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


getOneProyecto(codProyecto: string) {
  const collection = this.afs.collection('proyectos', ref => ref.where('codigo', '==', codProyecto)).snapshotChanges().map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as ProyectoInterface;
      return data;
    });
  });

  return collection;
}
getAllProyectos(): Observable < ProyectoInterface[] > {
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
      });
    });
  }
  );
}

pushFileTostorage(fileUpload: Upload, progress: { percentage: number }, id: any) {
  const storageRef = firebase.storage().ref();
  const fieleId = faker.random.alphaNumeric(16);
  const uploadTask = storageRef.child(`${this.basePath}/${fieleId}`).put(fileUpload.file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
    const snap = snapshot as firebase.storage.UploadTaskSnapshot;
    progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
  },
  () => {
      fileUpload.id = fieleId;
      fileUpload.url = uploadTask.snapshot.downloadURL;
      fileUpload.name = fileUpload.file.name;
      this.saveFileData(fileUpload, id);
    });
}

private saveFileData(fileUload: Upload, id) {
  const proyect = this.afs.collection('proyectos').doc(id);
  const newRef = proyect.collection('uploads').doc(fileUload.id);
  newRef.set({
    id: fileUload.id,
    name: fileUload.name,
    url: fileUload.url
  });
}

public removeFile(fileId) {
  return firebase.storage().ref().child(`${this.basePath} /${fileId}`).delete();
}

/*
addNewArchivo(archivo: { nombre: string,  url: string}) {
  this.afs.collection(`/${this.CARPETA_FILES}`).add(archivo);
}

cargarArchivosFirebase(archivos: FileItem[]) {
  const storageRef = firebase.storage().ref();

  for (const item of archivos) {
    if (item.progrso >= 100 ) {
      continue;
    }
    const uploadTask: firebase.storage.UploadTask =
    storageRef.child(`${this.CARPETA_FILES}/${item.nombreArchivo}`)
      .put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.storage.UploadTaskSnapshot) => item.progrso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          (error) => console.error('Error al subir Archivo', error),
          () => {
            console.log('Archivo cargado correctamente');
            item.url = uploadTask.snapshot.downloadURL;
            item.estaSubiendo = false;
            this.addNewArchivo({
              nombre: item.nombreArchivo,
              url: item.url,
            });
          });
  }
}*/


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
