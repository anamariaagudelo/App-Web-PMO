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
  cliente: ClienteInterface;

  constructor(
    private afs: AngularFirestore) {
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

    const collection = this.afs.collection('clientes', ref => ref.where('codigo', '==', codCliente)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ClienteInterface;
        return data;
      });
    });

    return collection;
  }



  updateCliente(cliente: ClienteInterface) {
    
  }

}
