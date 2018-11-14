import { Injectable } from '@angular/core';
import { ClienteInterface } from '../Models/cliente';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteColletion: AngularFirestoreCollection<ClienteInterface>;
  clienteDoc: AngularFirestoreDocument<ClienteInterface>;
  clientes: Observable<ClienteInterface[]>;
  cliente: Observable<ClienteInterface>;

  constructor(
      private afs: AngularFirestore ) {
      this.clienteColletion = this.afs.collection('clientes', ref => ref);
     }


addNewCliente(cliente: ClienteInterface) {
  this.clienteColletion.add(cliente);
}

getAllClientes(): Observable<ClienteInterface[]> {
  this.clientes = this.clienteColletion.snapshotChanges()
  .map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.data() as ClienteInterface;
     // data.codigo = action.payload.doc.id;
      return data;
    });
  });
  return this.clientes;
}
getOneCliente(codCliente: string) {
  this.clienteDoc = this.afs.doc<ClienteInterface>(`clientes/${codCliente}`);
  this.cliente = this.clienteDoc.snapshotChanges().map(action => {
    if (action.payload.exists === false) {
      return null;
    } else {
      const data = action.payload.data() as ClienteInterface;
    //  data.id = action.payload.id;
      return data;
    }
  });
  return this.cliente;
 }


updateCliente(cliente: ClienteInterface) {
  this.clienteDoc = this.afs.doc(`clientes/${cliente.codigo}`);
  this.clienteDoc.update(cliente);
}

}
